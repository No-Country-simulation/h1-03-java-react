import React, { useMemo } from "react";
import "./index.css";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import FilterInput from './FilterInput'
import Pagination from "./Pagination";
import PageSize from "./PageSize";
import { Checkbox } from "./CheckBox";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/table"

export default function Table({data, showSelectionColumn}) {
	const language = useSelector((state)=>state.i18nReducer.language)

	const columns = useMemo(()=>
		Object.keys(data[0]).map((e, i) => {
			return {
				accessor: e,
				Header: e.toUpperCase(),
				Cell: ({value}) => { return value}
			};
		}),
		[]
	);

	const { 
		getTableProps, 
		getTableBodyProps, 
		headerGroups, 
		//rows, 
		page,
		nextPage,
		previousPage,
		prepareRow,
		canNextPage,
		canPreviousPage,
		pageOptions,
		setPageSize,
		//footerGroups,
		state,
		setGlobalFilter, 
	} =	useTable({ columns, data },
		useGlobalFilter,
		useSortBy,
		usePagination,
		//getToggleHideAllColumnsProps,
		useRowSelect,
		showSelectionColumn 
		? (hooks) => {
			hooks.visibleColumns.push((columns) => {
				return [
					{
						id: 'selection',
						Header: ''/* ({ getToggleAllRowsSelectedProps }) => (
							<Checkbox {...getToggleAllRowsSelectedProps()} />
						) */,
						Cell: ({ row }) => (
							<Checkbox 
								{...row.getToggleRowSelectedProps()} 
								id={row.id}
							/>
						)
					}, ...columns
				]
			})
		}
		: '',);

	const { globalFilter, pageSize, pageIndex } = state

	return (
		<>
			<div className="grid grid-cols-2">
				<FilterInput filter={globalFilter} setFilter={setGlobalFilter} />
				<PageSize pageSize={pageSize} setPageSize={setPageSize} />
			</div>
			<div className="flex flex-col w-auto overflow-x-auto">
				<table
					className="table-my-style border-collapse"
					{...getTableProps()}
				>
					<thead>
						{headerGroups.map((headerGroup, i) => (
							<tr {...headerGroup.getHeaderGroupProps} key={i}>
								{headerGroup.headers.map((column, i) => (
									<th 
										{...column.getHeaderProps(column.getSortByToggleProps())} 
										key={i}
										title={i18n[language].table.titleOrderColumn}
									>
										{column.Header}
										{column.isSorted ? (column.isSortedDesc 
											? <span key={`empty${i}`}> ⬇</span>
											: <span key={`asc${i}`}> ⬆</span>)
											: <span key={`desc${i}`} style={{visibility:'hidden'}}> ⬆</span>}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()} key={i}>
									{row.cells.map((cell, j) => (
										<td {...cell.getCellProps()} key={j}>
											{cell.render("Cell")}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
					{/* <tfoot>
						{footerGroups.map((footerGroup, i) => (
							<tr {...footerGroup.getFooterGroupProps()} key={i}>
								{footerGroup.headers.map((column, i) => (
									<td {...column.getFooterProps} key={i}>
										{column.render("Footer")}
									</td>
								))}
							</tr>
						))}
					</tfoot> */}
				</table>
			</div>
			<Pagination 
				previousPage={previousPage}
				nextPage={nextPage}
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageIndex={pageIndex}
				pageOptions={pageOptions}
			/>

			{/* como funcionalidad, sacar lo siguiente, y aprovechar el JSON resultante */}
			<pre>
				<code>
					{JSON.stringify(
						{selectedRows: Object.keys(state.selectedRowIds).map((e) => data[e] )},
						null,
						2
					)}
				</code>
			</pre>
		</>
	);
}
