type ResultRowProps ={
    loading?: boolean;
}


export default function ResultRow({loading}:ResultRowProps){

    return(
        <div className=" relative border min-h-12 border-white/10 rounded-lg bg-gradient-to-r
        from-purple-500/10 to-blue-500/10 p-4 my-3 overflow-hidden">
             


             <div className="flex  gap-4">
             <div>Logo</div>
              <div className="grow">Provider name</div>
              <div className="flex gap-2"> 
                <span className="text-xl text-purple-200/80"> 0.000</span>
                <span className="text-xl text-purple-200/50">BTC</span>
              </div>
             </div>
             {loading && (
                <div className=" inset-0 absolute  bg-gradient-to-r from-transparent 
                via-blue-700/50 to-transparent skeleton-animation"/>
             )
             }
             </div>
    )
}