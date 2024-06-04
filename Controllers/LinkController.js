import links from "../Models/LinkModel.js"

const LinkController={
    getList:async(req,res)=>{
        try{
            const list=await links.find();
            res.json({list});
        }catch(e){
            res.status(400).json({message:e.message});

        }
    },
    getById:async(req,res)=>{
        try{
            const link=await links.findById(req.params.id);
            res.json(link);
        }catch(e){
            res.status(400).json({message:e.message});

        }
    },
    add:async(req,res)=>{
        try{
            const newLink=await links.create(req.body);
            res.json(newLink);

        }catch(e){
            res.status(400).json({message:e.message});
        }
    },
    update:async(req,res)=>{
        const{id}=req.params;
        const{orginalUrl}=req.body;
        try{
            const updateLink=await links.findByIdAndUpdate(id,req.body,{
                orginalUrl:orginalUrl,
            })
        }catch(e){
            res.status(400).json({message:e.message});
        }
    },
    delete:async(req,res)=>{
        const {id}=req.params;
        try{
            const deleted=await links.findByIdAndDelete(id);
            res.json(deleted);
        }catch(e){
            res.status(400).json({message:e.message});
        }
    },
};
export default LinkController;