<?php

namespace App\Repositories;

use App\Models\Bus;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class BusRepository
 * @package App\Repositories
 * @version December 8, 2018, 10:01 am UTC
 *
 * @method Bus findWithoutFail($id, $columns = ['*'])
 * @method Bus find($id, $columns = ['*'])
 * @method Bus first($columns = ['*'])
*/
class BusRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'busNumber',
        'busTrajectory',
        'busQuantity',
        'busCompany',
        'city',
        'user_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Bus::class;
    }
}
