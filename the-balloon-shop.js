module.exports = (pool) => {
    // insert valid colors into the database here
    
    async function getValidColors() {
        var data = (await pool.query("select * from valid_color")).rows;
        var fullColours = data.map((current_color)=>{
            return current_color.color_name
        });
        return fullColours
    }

    function requestColor (color) {

    }

    function colorCount (color) {

    }

    async function getInvalidColors () {
        var data = (await pool.query("select * from invalid_color")).rows;
        var fullColours = data.map((current_color)=>{
            return current_color.color_name
        });
        return fullColours
    }
     
    function allColors () {

    }

    return {
        getValidColors,
        requestColor,
        colorCount,
        getInvalidColors,
        allColors,
        //insertValidColors
    }
}