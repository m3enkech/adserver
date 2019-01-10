@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Event Bus
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($eventBus, ['route' => ['eventBuses.update', $eventBus->id], 'method' => 'patch']) !!}

                        @include('event_buses.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection