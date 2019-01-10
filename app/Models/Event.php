<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Event
 * @package App\Models
 * @version December 8, 2018, 9:59 am UTC
 *
 * @property \App\Models\Ad ad
 * @property \App\Models\User user
 * @property \Illuminate\Database\Eloquent\Collection ads
 * @property \Illuminate\Database\Eloquent\Collection EventBus
 * @property string title
 * @property string url
 * @property string exclusivity
 * @property integer ad_id
 * @property integer user_id
 */
class Event extends Model
{
    use SoftDeletes;

    public $table = 'events';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'title',
        'url',
        'exclusivity',
        'ad_id',
        'user_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'title' => 'string',
        'url' => 'string',
        'exclusivity' => 'string',
        'ad_id' => 'integer',
        'user_id' => 'integer'
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
    public function ad()
    {
        return $this->belongsTo(\App\Models\Ad::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function eventBuses()
    {
        return $this->hasMany(\App\Models\EventBus::class);
    }
}
