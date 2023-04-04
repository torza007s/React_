<?php

namespace App\Http\Controllers;

use App\Models\Memos;
use App\Http\Requests\StoreMemosRequest;
use App\Http\Requests\UpdateMemosRequest;

class MemosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMemosRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMemosRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Memos  $memos
     * @return \Illuminate\Http\Response
     */
    public function show(Memos $memos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Memos  $memos
     * @return \Illuminate\Http\Response
     */
    public function edit(Memos $memos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMemosRequest  $request
     * @param  \App\Models\Memos  $memos
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMemosRequest $request, Memos $memos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Memos  $memos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Memos $memos)
    {
        //
    }
}
