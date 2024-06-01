import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <div className='font-sans'>
                    <RouterProvider router={router} />
                </div>
            </QueryClientProvider>
        </AuthProvider>
    </div>
  </React.StrictMode>,
)
