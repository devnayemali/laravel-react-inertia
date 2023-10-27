<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrganizationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


Route::get('/', function() {
    return Inertia::render("Home");
});
Route::get('/about', function() {
    return Inertia::render("About");
});
Route::get('/service', function() {
    return Inertia::render("Service");
});
Route::get('/contact', function() {
    return Inertia::render("Contact");
});

// Organization 
Route::get('/organizations/create', [OrganizationController::class, 'create'])->name('organizations.create');
Route::get('/organizations/{organization}/edit', [OrganizationController::class, 'edit'])->name('organizations.edit');
Route::put('/organizations/{organization}', [OrganizationController::class, 'update'])->name('organizations.update');
Route::post('/organizations', [OrganizationController::class, 'store'])->name('organizations.store');
Route::get('/organizations', [OrganizationController::class, 'index'])->name('organizations.index');

Route::delete('/organizations/{id}', [OrganizationController::class, 'destroy'])->name('organizations.destroy');

require __DIR__.'/auth.php';
