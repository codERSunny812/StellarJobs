
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import companies   from '../data/companies.json'
import questions from '../data/question.json'
import Autoplay from "embla-carousel-autoplay"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"




const LandingPage = () => {
  return (

<main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">

  <section className="text-center">
        <h1 className=" text-4xl capitalize font-extrabold gradient-title sm:text:6xl lg:text-8xl tracking-tighter py-2">find your dream job and get <span>hired</span></h1>

        <p className="text-gray-300 text-xs sm:mt-4 sm:text-xl capitalize">explore thousands of job listings or find the perfect candidates</p>
  </section>

  <section className="flex gap-6 flex-col sm:flex-row sm:justify-center sm:items-center items-center justify-center">
    {/* buttons
     */}

  <Link to='/jobs'>
          <Button variant='blue' size='xl' className='capitalize'>find jobs</Button>
  </Link>

        <Link to='/post-job'>
          <Button variant='destructive' size='xl' className='capitalize'>post a job</Button>
        </Link>

  </section>

  <section>
     {/* carasoul */}
        <Carousel className="w-full  py-10" plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}>
          <CarouselContent className="flex gap-5 sm:gap-20 items-center" >
            {
              companies.map(({name,id,path})=>{
                // console.log(name)
                return(
                  <CarouselItem key={id} className='basis-1/3 lg: basis-1/6'>
                    <img src={path} alt={name}
                    className="h-5 sm:h-14 object-cover"
                    />
                  </CarouselItem>
                )

              })
            }
          </CarouselContent>
        </Carousel>
      {/* banner */}

      <img src="/banner.jpg" alt="banner" className="w-full py-3 mt-10" />
  </section>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* cards */}


        <Card className="">
          <CardHeader>
            <CardTitle>for job seekers</CardTitle>
          </CardHeader>
          <CardContent>
           search and apply for jobs, track applicartion and more.
          </CardContent>
        </Card>


        <Card className="">
          <CardHeader>
            <CardTitle>for employers</CardTitle>
          </CardHeader>
          <CardContent>
            post jobs, manage applications and find the best candidates.
          </CardContent>
        </Card>

  </section>

  <section>
    {/* accordians */}
        <Accordion type="single" collapsible className="w-full">
          {
            questions.map(({ id,question,answer })=>{
              // console.log(id)
              return(
                <AccordionItem value={`item-${id+1}`} key={id}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              )

            })
          }
          
        </Accordion>
  </section>

</main>

  );
   
}

export default LandingPage