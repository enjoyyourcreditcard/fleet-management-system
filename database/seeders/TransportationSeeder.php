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
                'address' => 'Kemiri Muka, Beji, Depok City, West Java 16424',
                'latitude' => -1.751248463988304,
                'longitude' => 101.259637009352446
            ], [
                'name' => 'Mazda ɛ̃fini RX-7 Type R',
                'driver' => 'Muhammad Fattan Habrizi',
                'address' => 'Jl. Prof. DR. Sumitro Djojohadikusumo, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424',
                'latitude' => -6.360823186937455,
                'longitude' => 106.82920672078069
            ], [
                'name' => 'Subaru Impreza WRX STi Coupe Type R Version V',
                'driver' => 'Muhammad Nur Hamada',
                'address' => 'Jl. Perumahan Jatijajar, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451',
                'latitude' => -6.411340139943225,
                'longitude' => 106.86431252666556
            ], [
                'name' => 'Mazda SAVANNA RX-7 ∞ III',
                'driver' => 'Sammy Bernald',
                'address' => 'Jl. Medan Merdeka Sel., RT.11/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110',
                'latitude' => -6.180384321069731,
                'longitude' => 106.83147672874236
            ], [
                'name' => 'Nissan Skyline GT-R V-Spec II',
                'driver' => 'Jonathan Joestar',
                'address' => 'Jl. BSD Grand Boulevard, Pagedangan, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339',
                'latitude' => -6.29757617965779,
                'longitude' => 106.63668172895538
            ], [
                'name' => 'Nissan SilEighty',
                'driver' => 'Bella Insani',
                'address' => 'Jl. MT Haryono, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76115',
                'latitude' => -1.2250092814416436,
                'longitude' => 116.86750538220574
            ],
        ];

        foreach ($dummies as $dummy) {
            Transportation::create($dummy);
        }
    }
}
