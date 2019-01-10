@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Ad
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($ad, ['route' => ['ads.update', $ad->id], 'method' => 'patch','files' => true]) !!}

                        @include('ads.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection