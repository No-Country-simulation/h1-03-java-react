import React, { useMemo } from "react";
import "./index.css";
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
	useRowSelect,
} from "react-table";
import FilterInput from "./FilterInput";
import Pagination from "./Pagination";
import PageSize from "./PageSize";
import { Checkbox } from "./CheckBox";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/table";

export default function Table({
	data,
	showSelectionColumn,
	showFilterInput,
	showPageSize,
	showHeader,
	showOldPagination,
}) {
	const language = useSelector((state) => state.i18nReducer.language);

	const columns = useMemo(
		() =>
			Object.keys(data[0]).map((e, i) => {
				return {
					accessor: e,
					Header: e.toUpperCase(),
					Cell: ({ value }) => {
						return value;
					},
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
	} = useTable(
		{ columns, data },
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
								id: "selection",
								Header: "" /* ({ getToggleAllRowsSelectedProps }) => (
							<Checkbox {...getToggleAllRowsSelectedProps()} />
						) */,
								Cell: ({ row }) => (
									<Checkbox
										{...row.getToggleRowSelectedProps()}
										id={row.id}
									/>
								),
							},
							...columns,
						];
					});
				}
			: ""
	);

	const { globalFilter, pageSize, pageIndex } = state;

	return (
		<>
			<div className="grid grid-rows-2 justify-start md:grid-cols-2 md:justify-items-center ">
				{showFilterInput && (
					<FilterInput
						filter={globalFilter}
						setFilter={setGlobalFilter}
					/>
				)}
				{showPageSize && (
					<PageSize pageSize={pageSize} setPageSize={setPageSize} />
				)}
			</div>
			<div className="flex flex-col w-full overflow-x-auto">
				<table
					className="border-collapse"
					{...getTableProps()}
				>
					{showHeader && (
						<thead>
							{headerGroups.map((headerGroup, i) => (
								<tr
									{...headerGroup.getHeaderGroupProps}
									key={i}
								>
									{headerGroup.headers.map((column, i) => (
										<th
											{...column.getHeaderProps(
												column.getSortByToggleProps()
											)}
											key={i}
											title={
												i18n[language].table
													.titleOrderColumn
											}
										>
											{column.Header}
											{column.isSorted ? (
												column.isSortedDesc ? (
													<span key={`empty${i}`}>
														{" "}
														⬇
													</span>
												) : (
													<span key={`asc${i}`}>
														{" "}
														⬆
													</span>
												)
											) : (
												<span
													key={`desc${i}`}
													style={{
														visibility: "hidden",
													}}
												>
													{" "}
													⬆
												</span>
											)}
										</th>
									))}
								</tr>
							))}
						</thead>
					)}
					<tbody {...getTableBodyProps()}>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<div className="flex mb-3 border border-[#5666BF] rounded-3xl p-5">
									<tr 
										{...row.getRowProps()} key={i}
									>
										{row.cells.map((cell, j) => (
											<td 
												{...cell.getCellProps()} 
												key={j}
												className="border border-[#5666BF]"
											>
												{cell.render("Cell")}
											</td>
										))}
									</tr>
								</div>
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

			{showOldPagination && 
				<Pagination
					previousPage={previousPage}
					nextPage={nextPage}
					canPreviousPage={canPreviousPage}
					canNextPage={canNextPage}
					pageIndex={pageIndex}
					pageOptions={pageOptions}
				/>
			}	
			{/* como funcionalidad, sacar lo siguiente, y aprovechar el JSON resultante */}
			{/* <pre>
				<code>
					{JSON.stringify(
						{
							selectedRows: Object.keys(state.selectedRowIds).map(
								(e) => data[e]
							),
						},
						null,
						2
					)}
				</code>
			</pre> */}
		</>
	);
}
