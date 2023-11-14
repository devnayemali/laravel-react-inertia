<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organization;
use App\Http\Requests\organizationRequest;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $organizations = Organization::query()
            ->when($search, fn ($query) => $query
            ->where('name', 'LIKE', "%{$search}%"))
            ->orWhere('category', 'LIKE', "%{$search}%")
            ->paginate(10);

        // $organizations = Organization::query()->paginate(10);
        // $links = Organization::paginate(10)->links()->toArray();
        

        // dd($organizations);

        return Inertia::render('Organization/Index', [
            'pageOrganizations' => $organizations,
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $organizations = Organization::where('name', 'LIKE', "%$query%")
            ->orWhere('location', 'LIKE', "%$query%")
            ->orWhere('start_date', 'LIKE', "%$query%")
            ->get();

        return inertia('Organizations/Index', [
            'organizations' => $organizations,
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
    public function store(organizationRequest $request)
    {
        $input = $request->validated();

        $dataArray = array(
            'name' => $input['name'],
            'location' => $input['location'],
            'start_date' => \Carbon\Carbon::parse($input['start_date'])->format('Y-m-d H:i:s') ?? null,
            'start_time' => \Carbon\Carbon::parse($input['start_time'])->format('H:i:s') ?? null,
            'member' => $input['member'],
            'category' => $input['category'],
        );

        Organization::create($dataArray);

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
    public function update(organizationRequest $request, $id)
    {
        $input = $request->validated();


        $dataArray = array(
            'name' => $input['name'],
            'location' => $input['location'],
            'start_date' => \Carbon\Carbon::parse($input['start_date'])->format('Y-m-d H:i:s') ?? null,
            'start_time' => \Carbon\Carbon::parse($input['start_time'])->format('H:i:s') ?? null,
            'member' => $input['member'],
            'category' => $input['category'],
        );

        $organization = Organization::findOrFail($id);

        $organization->update($dataArray);
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
