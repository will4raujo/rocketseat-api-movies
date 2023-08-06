const AppError = require("../utils/AppError");
const { response } = require("express");
const knex = require("../database/knex")

class MoviesNotesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        if (rating > 5 || rating < 0) {
            throw new AppError("A avaliação do filme é de 1 a 5")
        }

        const [note_id] = await knex("movie_notes").insert({
            title,
            description,
            rating
        });

        const tagsInsert = tags.map(name => {
            return {
                name,
                user_id,
                note_id
            }
        })
        
        await knex("movie_tags").insert(tagsInsert);
        return response.status(201).json({})
    }

    async show(request, response) {
        const { id } = request.params;

        const movie = await knex("movie_notes").where({id}).first();

        return response.json({
            ...movie
        })
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_notes").where( { id } ).delete();

        return response.json();
    } 
}

module.exports = MoviesNotesController