var mongoose = require('mongoose');
slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    slug: { type: String, slug:[ "title", "_id"], unique: true }
}, { timestamps: true });

blogSchema.methods.toJSON = function () {
    return{ 
        _id: this._id,
        title: this.title,
        body: this.body,
        slug: this.slug
    };
};

mongoose.model('Blogs', blogSchema);