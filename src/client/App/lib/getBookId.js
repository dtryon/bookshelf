import slug from 'slug';

export default book => {
    return slug(book.title);
}
