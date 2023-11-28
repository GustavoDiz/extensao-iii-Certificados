const getPagination = (page,size) => {
    const limit = size ? +size :3 ;
    const from = page ? page * limit : 0;
    const to = page ? from + size : size;

    console.log(limit);
    console.log(from);
    console.log(to);
    return {from, to};
}

module.exports = {getPagination};