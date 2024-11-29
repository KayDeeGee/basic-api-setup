# basic-api-setup
Just some basic API and frontend setup in Laravel with Sanctum for auth.
! NOT YET PERFECT !

#steps
> install Laravel and React (any frontend framework) in different folders/directory

# Laravel 
- redirect to your laravel app (iticket-api)
- install Laravel Sanctum (Authorization, basically prevents unauthorized access to api endpoints)
```
php artisan install:api
```
- Add this config file, if problems arise (CORS Errors)
```
php artisan config:publish cors
```
- Go to routes/api.php (shortcut in vscode: ctrl + p, then type api). Make a test API endpoint e.g
```
Route::post('/test', function () {
    return response()->json(['message' => 'API is working!']);
});
```
- run laravel app. Each time there's a change, rerun app.

Reference: https://laravel.com/docs/11.x/sanctum#introduction

# React
- redirect to your react app (iticket-frontend)
- install axios http shit
```
npm install axios
```
- make api.js file, then paste this 
```
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your Laravel backend URL
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
```
- go to your react app (e.g App.jsx), then add this test code
```
import { useEffect, useState } from 'react'
import './App.css'
import api from '../utils/api';


function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        api.post('/test')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
        </>
    )
}

export default App
```
- run react app (e.g npm run dev)
- check console, should have Object { message: "API is working!" } in console.
  
