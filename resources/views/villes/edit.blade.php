@extends('layouts.app')
@section('css')
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="{{ asset('css/addrow/tags.css')}}">
@endsection
@section('content')
    <section class="content-header">
        <h1>
            Ville
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($ville, ['route' => ['villes.update', $ville->id], 'method' => 'patch']) !!}

                        @include('villes.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection
@section('scripts')
<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="{{ asset('js/addrows/tags.js')}}"></script>

@endsection