<?php

namespace Database\Seeders;

use App\Models\Transportation;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TransportationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dummies = [
            [
                'name' => 'Toyota Sprinter Trueno 3door GT-APEX',
                'driver' => 'Nur Wahid Septian',
                'address' => 'Jl. Margonda Raya No.358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423',
                'latitude' => -6.3728443678617985,
                'longitude' => 106.83443422711113,
            ]
        ];

        foreach ($dummies as $dummy) {
            Transportation::create($dummy);
        }
    }
}
