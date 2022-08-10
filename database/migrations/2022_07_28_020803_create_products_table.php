<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(); // who creating the product
            $table->string('name'); // name of product
            $table->string('slug')->unique(); // for generating unique url 
            $table->longText('description'); // use rich text editor 
            $table->unsignedBigInteger('stock'); // overall stock (also count the variation stock)
            $table->unsignedDouble('price'); // if product doesn't have any variants
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
