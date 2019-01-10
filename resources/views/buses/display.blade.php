@extends('layouts.app')
@section('css')
<link href="https://vjs.zencdn.net/7.3.0/video-js.css" rel="stylesheet">

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
<script src="https://vjs.zencdn.net/7.3.0/video.js"></script>
<script src="{{ asset('js/videojs-playlist/dist/videojs-playlist.js') }}"></script>
<script type="text/javascript">
        
        $(function tick() {
            var player = videojs('MY_VIDEO_1');
              ChangeVidList(player); //this calls it on load
              timerId = setTimeout(tick, 20000); // (*)
            
        });


        function ChangeVidList(player) {
            player.playlist([

            <?php foreach ($event_details as $event_detail): ?>
                   <?php 
                   $today_time = Carbon\Carbon::now();
                   if ($today_time->between($event_detail->date_diffusion,$event_detail->date_end_diffusion)): ?>
                       
                    { 
                        sources: [{
                        src: '{!! URL::to('/storage/'.$event_detail->event->ad->user_id.'/'.$event_detail->event->ad->adFileName)  !!}',
                        type: 'video/mp4'
                      }],
                      poster: 'http://media.w3.org/2010/05/sintel/poster.png'
                    },
                <?php endif ?>

                <?php endforeach ?>    

            ]);

        // Play through the playlist automatically.
        player.playlist.autoadvance(0);
        player.playlist.repeat(true);
        //alert(player.playlist.currentItem() + 1);
        //player.load();
             
        }

</script>
@endsection