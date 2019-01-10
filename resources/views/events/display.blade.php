@extends('layouts.app')
@section('css')
<link href="http://vjs.zencdn.net/4.12/video-js.css" rel="stylesheet">
<script src="http://vjs.zencdn.net/4.12/video.js"></script>

@endsection
@section('content')
    <section class="content-header">
        <h1 class="pull-left">Buses</h1>
        <h1 class="pull-right">
           <a class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px" href="{!! route('buses.create') !!}">Add New</a>
        </h1>
    </section>
    <div class="content">
        <div class="clearfix"></div>

        @include('flash::message')

        <div class="clearfix"></div>
        <div class="box box-primary">
            <div class="box-body">


<div>
<video autoplay  id="MY_VIDEO_1" class="video-js vjs-default-skin"  controls
 preload="auto" width="640" height="264" poster="MY_VIDEO_POSTER.jpg"
 data-setup="{}">
</video>
</div>
    

             </div>
        </div>
    </div>      


    



@endsection
@section('scripts')
<script src="http://www.vincentbitaud.com/cop21/videojs-playlist/dist/videojs-playlist.js"></script>
<script src="{{ asset('js/video.js/dist/video-js.js') }}"></script>
<script src="{{ asset('js/videojs-playlist/dist/videojs-playlist.js') }}"></script>
<script type="text/javascript">
    $(document).ready(function() {
    var player = videojs('MY_VIDEO_1');

player.playlist([

<?php foreach ($liste_videos as $video): ?>
        { 
            sources: [{
            src: '{{$video["adFileName"]}}',
            type: 'video/mp4'
          }],
          poster: 'http://media.w3.org/2010/05/sintel/poster.png'
        },
    <?php endforeach ?>    

]);
 
// Play through the playlist automatically.
player.playlist.autoadvance(0);
player.playlist.repeat(true);
});
</script>
@endsection