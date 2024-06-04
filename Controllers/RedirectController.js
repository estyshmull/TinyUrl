import links from "../Models/LinkModel";

const RedirectController={
    redirect:async(req,res)=>{
        try{
            const link=await links.findById(req.params.id);
            if(!link)
                return res.status(404).json({message:"404 the page not found"});
            let targetValue=null;
            const target=req.query[link.targetParamName];
            if(target)
                {
                    targetValue=link.targetValue.find(t=t.name==target)
                }
                const click={
                    time:new Date(),
                    ipAddress:req.ip,
                    targetParamValue:targetValue?.value
                }
                link.click.push(click);
                await link.save();
                res.redirect(link.save);


        }catch(e)
        {
            res.status(400).json({message:e.message});
        }
    }
   
}
export default RedirectController;