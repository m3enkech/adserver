<?php

namespace App\Repositories;

use App\Models\Ad;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class AdRepository
 * @package App\Repositories
 * @version December 8, 2018, 9:58 am UTC
 *
 * @method Ad findWithoutFail($id, $columns = ['*'])
 * @method Ad find($id, $columns = ['*'])
 * @method Ad first($columns = ['*'])
*/
class AdRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'adName',
        'adFileName',
        'adSecteur',
        'status',
        'client_id',
        'user_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Ad::class;
    }
}
