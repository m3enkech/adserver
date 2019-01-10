<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class EventBus
 * @package App\Models
 * @version December 8, 2018, 9:59 am UTC
 *
 * @property \App\Models\Bus bus
 * @property \App\Models\Event event
 * @property \App\Models\User user
 * @property \App\Models\Ville ville
 * @property \Illuminate\Database\Eloquent\Collection ads
 * @property \Illuminate\Database\Eloquent\Collection events
 * @property string|\Carbon\Carbon date_diffusion
 * @property string|\Carbon\Carbon date_end_diffusion
 * @property string heure_diffusion_debut
 * @property string heure_diffusion_fin
 * @property integer user_id
 * @property integer event_id
 * @property integer bus_id
 * @property integer ville_id
 */
class EventBus extends Model
{
    use SoftDeletes;

    public $table = 'event_bus';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'date_diffusion',
        'date_end_diffusion',
        'heure_diffusion_debut',
        'heure_diffusion_fin',
        'user_id',
        'event_id',
        'bus_id',
        'ville_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'date_diffusion' => 'dateTime',
        'date_end_diffusion' => 'dateTime',
        'heure_diffusion_debut' => 'string',
        'heure_diffusion_fin' => 'string',
        'user_id' => 'integer',
        'event_id' => 'integer',
        'bus_id' => 'integer',
        'ville_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function bus()
    {
        return $this->belongsTo(\App\Models\Bus::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function event()
    {
        return $this->belongsTo(\App\Models\Event::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function ville()
    {
        return $this->belongsTo(\App\Models\Ville::class);
    }
}
