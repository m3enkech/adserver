<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Ad
 * @package App\Models
 * @version December 8, 2018, 9:58 am UTC
 *
 * @property \App\Models\Client client
 * @property \App\Models\User user
 * @property \Illuminate\Database\Eloquent\Collection Event
 * @property string adName
 * @property string adFileName
 * @property string adSecteur
 * @property string status
 * @property integer client_id
 * @property integer user_id
 */
class Ad extends Model
{
    use SoftDeletes;

    public $table = 'ads';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'adName',
        'adFileName',
        'adSecteur',
        'status',
        'client_id',
        'user_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'adName' => 'string',
        'adFileName' => 'string',
        'adSecteur' => 'string',
        'status' => 'string',
        'client_id' => 'integer',
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
    public function client()
    {
        return $this->belongsTo(\App\Models\Client::class);
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
    public function events()
    {
        return $this->hasMany(\App\Models\Event::class);
    }
}
