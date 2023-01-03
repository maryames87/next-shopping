export default function email(req,res){
  if(req.method==="POST"){
    res.json({
      response:"successfully",
      yourMessage: req.body.text,
      yourEmail: req.body.email,
    })
  }
}