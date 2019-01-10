@extends('layouts.app')
@section('css')
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="{{ asset('css/addrow/tags.css')}}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/css/bootstrap-select.min.css">
<link rel="stylesheet" href="{{ asset('css/counter.css')}}">
@endsection
@section('content')
    <section class="content-header">
        <h1>
            Event
        </h1>
    </section>
    <div class="content">
        @include('adminlte-templates::common.errors')
        <div class="box box-primary">

            <div class="box-body">
                
                <div class="row">
                    {!! Form::open(['route' => 'events.store']) !!}

                        @include('events.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')

<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="{{ asset('js/addrows/tags.js')}}"></script>


<!-- Latest compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min.js"></script>
<script src="{{ asset('js/counter.js') }}"></script>
<script src="{{ asset('js/calculator.js') }}"></script>

<script>
    $(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="date" class="form-control" name="event_date[]"/></td>';
        cols += '<td><select name="event_stime[]" class="form-control" data-live-search="true">';
                        @for ($i = 6; $i < 24; $i++)         
        cols +=    '<option value="{{$i}}">{{str_pad($i, 2, '0', STR_PAD_LEFT)}}:00</option>';
                        @endfor
        cols += '</select></td>';
        cols += '<td><select name="event_etime[]" class="form-control" data-live-search="true">';
                        @for ($i = 6; $i < 24; $i++)       
        cols +=    '<option value="{{$i}}">{{str_pad($i, 2, '0', STR_PAD_LEFT)}}:00</option>';
                            @endfor
        cols += '</select></td>';
        cols += '<td><select name="bus_id[]" class="form-control" data-live-search="true">';
                        @foreach($buses as $bus) 
        cols +=    '<option value="{!! $bus->id !!}">{!! $bus->busNumber.' '.$bus->city !!}</option>';
                            @endforeach
        cols += '</select></td>';

        cols += '<td><input type="text" class="form-control" name="city[]"/></td>';
        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';

        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1;
    });


});
</script>


@endsection
