import { Card, CardContent } from "@/components/ui/card";
const PopularCategories = () => {

    return(
        <section className="p-6 bg-grey-1 flex flex-col gap-5">
            <h1 className="font-bold">Order Canadas Most Popular Categories </h1>
            <div className="grid grid-cols-2 gap-8 ">
                       {
                Array.from({length: 6}).map((_, index) => <Card key={index} className="aspect-square">
                    <CardContent>
                        {index+1}
                    </CardContent>
                </Card>)
            }
            </div>
 
        </section>)
}
    export default PopularCategories;            

