let data = [
    { id: 1, 
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quidem suscipit magnam aperiam dicta nostrum, vel tenetur sint vitae neque omnis sequi fuga dolore ipsam culpa explicabo rerum eveniet aliquid.shoes" },
    { id: 2, 
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quidem suscipit magnam aperiam dicta nostrum, vel tenetur sint vitae neque omnis sequi fuga dolore ipsam culpa explicabo rerum eveniet aliquid.shoes" },
    { id: 3, 
    item: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quidem suscipit magnam aperiam dicta nostrum, vel tenetur sint vitae neque omnis sequi fuga dolore ipsam culpa explicabo rerum eveniet aliquid.shoes" }
]

const note = function (app) {


    app.get("/", (req, res) => {
        res.render('note', { notes: data })

    })

    app.post("/addnote", (req, res) => {
       
        var newNote = {
            id: Math.random() * 20,
            item: req.body.newnote
        }
        data.push(newNote)
        res.redirect("/")

    })

    app.post("/deletenote/:id", (req, res) => {

        //    console.log(req.params.id)
        //    console.log(data)
        let newnote = data.filter((note) => note.id != req.params.id)
        data = newnote
        //   console.log(newnote)
        return res.redirect("/")
    })



}
module.exports = note