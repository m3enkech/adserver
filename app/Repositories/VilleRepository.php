<?php

namespace App\Repositories;

use App\Models\Ville;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class VilleRepository
 * @package App\Repositories
 * @version December 8, 2018, 9:14 am UTC
 *
 * @method Ville findWithoutFail($id, $columns = ['*'])
 * @method Ville find($id, $columns = ['*'])
 * @method Ville first($columns = ['*'])
*/
class VilleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Ville::class;
    }
}
