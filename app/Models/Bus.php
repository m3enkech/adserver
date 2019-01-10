<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Bus
 * @package App\Models
 * @version December 8, 2018, 10:01 am UTC
 *
 * @property \App\Models\User user
 * @property \Illuminate\Database\Eloquent\Collection ads
 * @property \Illuminate\Database\Eloquent\Collection EventBus
 * @property \Illuminate\Database\Eloquent\Collection events
 * @property \Illuminate\Database\Eloquent\Collection villes
 * @property string busNumber
 * @property string busTrajectory
 * @property text secteurs
 * @property integer busQuantity
 * @property string busCompany
 * @property string city
 * @property integer user_id
 * @property integer ville_id
 */
class Bus extends Model
{
    use SoftDeletes;

    public $table = 'buses';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'busNumber',
        'busTrajectory',
        'busQuantity',
        'busCompany',
        'city',
        'user_id',
        'ville_id',
        'secteurs'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'busNumber' => 'string',
        'busTrajectory' => 'string',
        'busQuantity' => 'integer',
        'busCompany' => 'string',
        'city' => 'string',
        'user_id' => 'integer',
        'ville_id' => 'integer',
        'secteurs' =>'text'
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function eventBuses()
    {
        return $this->hasMany(\App\Models\EventBus::class);
    }
}
