@extends('layouts.app')
@section('css')


@endsection
@section('content')
    <section class="content-header">
        <h1>
            Bus
        </h1>
    </section>
    <div class="content">
        @include('adminlte-templates::common.errors')
        <div class="box box-primary">

            <div class="box-body">
                <div class="row">
                    {!! Form::open(['route' => 'buses.store']) !!}

                        @include('buses.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.full.min.js"></script>

<script>
    $(function () {
    //Initialize Select2 Elements
    $('.select2').select2();
    });
</script>
@endsection

