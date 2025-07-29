import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilteredProducts } from "@/Contexts/FilteredProductContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function FAQs() {
  const { productID } = useParams();
  const { products } = useContext(FilteredProducts);
  const product = products.find(
    (product) => product.id === parseInt(productID)
  );
  return (
    <div className="mt-3">
      <h1 className="text-xl font-medium">FAQs</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="returnPolicy">
          <AccordionTrigger>
            How much time I have to return the product?
          </AccordionTrigger>
          <AccordionContent>{product.returnPolicy}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="shippingTerms">
          <AccordionTrigger>How long shipping takes?</AccordionTrigger>
          <AccordionContent>{product.shippingInformation}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="internationalShipping">
          <AccordionTrigger>Do you deliver internationally?</AccordionTrigger>
          <AccordionContent>Yes, We do!</AccordionContent>
        </AccordionItem>
        <AccordionItem value="paymentAcceptence">
          <AccordionTrigger>
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            We accept Visa, MasterCard, Apple Pay, Google Pay, PayPal and other
            popular methods
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="productHit">
          <AccordionTrigger>
            My order arrived damaged or incorrect — what should I do?
          </AccordionTrigger>
          <AccordionContent>
            Sorry! Please, contact us for 48 hours, and we solve it!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
