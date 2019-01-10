<?php

namespace App\Repositories;

use App\Models\Secteur;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class SecteurRepository
 * @package App\Repositories
 * @version December 31, 2018, 1:56 pm UTC
 *
 * @method Secteur findWithoutFail($id, $columns = ['*'])
 * @method Secteur find($id, $columns = ['*'])
 * @method Secteur first($columns = ['*'])
*/
class SecteurRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'secteur_name',
        'ville_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Secteur::class;
    }
}
