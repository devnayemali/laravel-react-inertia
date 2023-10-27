<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organization;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organizations = Organization::latest()->get();
        return Inertia::render('Organization/Index', [
            'organizations' => $organizations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Organization/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
          $request->validate([
            'name' => ['required', 'max:50'],
            'location' => ['required', 'max:50'],
            'member' => ['required', 'max:50'],
        ]);
        Organization::create($request->all());
        
        return redirect()->route('organizations.index')->with('message', 'Organization created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        return Inertia::render('Organization/Edit', [
            'organization' => $organization,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Organization $organization)
{
    $request->validate([
        'name' => ['required', 'max:50'],
        'location' => ['required', 'max:50'],
        'member' => ['required', 'max:50'],
    ]);
    $organization->update($request->all());
    return redirect()->route('organizations.index')->with('message', 'Organization updated successfully.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $organization = Organization::findOrFail($id);

    if (!$organization) {
        return redirect()->route('organizations.index')->with('message', 'Organization not found.');
    }

    $organization->delete();
    return redirect()->route('organizations.index')->with('message', 'Organization deleted successfully.');

    }
}
