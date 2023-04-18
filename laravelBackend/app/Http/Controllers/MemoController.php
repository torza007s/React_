<?php

namespace App\Http\Controllers;

use App\Models\Memo;
use Illuminate\Http\Request;

use App\Http\Requests\StoreMemoRequest;
use Illuminate\Support\Facades\Validator;
// use App\Http\Requests\UpdateMemoRequest;


class MemoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return Memo::all()->toJson();
        return Memo::latest()->first()->jsonSerialize();
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
     * @param  \App\Http\Requests\StoreMemoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMemoRequest $request)
    {
        //
        $request->json([
            'name' => 'require',
            'document' => 'sometimes',
            'description' => 'require',
            'created_by' => 'require',
        ]);

        $memo = Memo::create($request->all());

        if ($request->hasFile('document')) {
            $pdf = $request->file('document');
            $document_path = $pdf->storeAs('public/files/memos/pdf', uniqid() . '.' . $pdf->getClientOriginalExtension());
            $memo->update(['document_name' => $pdf->getClientOriginalName(), 'document_path' => $document_path]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Memo successfully created',
            'memo' => $memo,
        ], 200);

        return Memo::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Memo  $memo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Memo::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Memo  $memo
     * @return \Illuminate\Http\Response
     */
    public function edit(Memo $memo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMemoRequest  $request
     * @param  \App\Models\Memo  $memo
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMemoRequest $request, Memo $memo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Memo  $memo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Memo $memo)
    {
        //
    }

    public function resetdb()
    {
        Memo::truncate();
        return response('reset success', $status = 200);
    }
}
