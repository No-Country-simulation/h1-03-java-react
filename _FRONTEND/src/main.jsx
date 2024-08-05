import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({defaultOptions: {
	queries: {
		refetchOnMount: true,
		refetchOnReconnect: true,
		refetchOnWindowFocus: true,
		/* staleTime: 60000, //tiempo en el que no sera necesario hacer ningun refetch */
		/* refetchInterval: 36000000, //1 hora */
		/* cacheTime: 36000000, //1 hora, si estuvo inactivo por ese tiempo, lo borra de la cache  */	
		/* enabled: true, //deja la query en idle, se usa con refetch, para hacer fetch manual ej: search */
		/* retry: 3 //por defecto hace 3 intentos ante un error, cada uno con un tiempo de espera mayor */
		/* retryDelay: 1000 //tiempo de espera para hacer otro intento de fetch,ante un error */
	},
}})


ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<App />
			{/* <ReactQueryDevtools /> */}
		</BrowserRouter>
	</QueryClientProvider>
);


//export default queryClient