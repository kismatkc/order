import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KnowMore = () => {
  return (
    <section className="p-3">
      <Accordion type="single" collapsible className="flex flex-col gap-y-3">
        <h1 className="font-bold text-xl text-center">Know more about us!</h1>

        <AccordionItem value="item-1">
          <AccordionTrigger>Q: How does Order.UK work?</AccordionTrigger>
          <AccordionContent>
            A: Order.UK is a convenient and user-friendly food delivery platform
            that connects hungry customers with their favorite local
            restaurants. Here's how it works: Browse Restaurants: Visit our
            website or mobile app to explore a wide variety of restaurants in
            your area. Select Your Meal: Choose your favorite dishes from the
            restaurant's menu and add them to your cart. Place Your Order:
            Review your order, add any special instructions, and proceed to
            checkout. Payment: Securely pay for your order using various payment
            methods, including credit/debit cards and digital wallets. Track
            Your Delivery: Once your order is confirmed, you can track its
            progress in real-time through our app or website. Enjoy Your Food:
            Your delicious meal will be delivered right to your doorstep by our
            dedicated delivery partners. Order.UK aims to make food delivery
            simple, fast, and enjoyable for everyone. Whether you're craving a
            quick lunch, planning a family dinner, or treating yourself to a
            late-night snack, we've got you covered!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Q: What payment methods are accepted?
          </AccordionTrigger>
          <AccordionContent>
            Order.UK accepts a variety of popular payment methods to provide
            convenience for our customers: Credit and debit cards (Visa,
            Mastercard, American Express) Digital wallets (Apple Pay, Google
            Pay) PayPal Bank transfers Cash on delivery (for select areas) We
            strive to offer secure and flexible payment options to suit
            different customer preferences. The specific payment methods
            available may vary slightly depending on your location and the
            restaurant you're ordering from. You can view all accepted payment
            methods at checkout before placing your order.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Q: Can I track my order in real-time?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can track your order in real-time on Order.UK. Once your
            order is confirmed, you'll receive a tracking link via email or text
            message. You can also log into your account on our website or mobile
            app to view the live status of your delivery. Our tracking system
            allows you to see when your food is being prepared, when it's out
            for delivery, and the estimated arrival time. This feature ensures
            you're always informed about your order's progress and can plan
            accordingly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="">
          <AccordionTrigger>
            Q: Any discounts or promotions available?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Order.UK regularly offers special discounts and promotions to
            provide great value to our customers. Here are some ways you can
            save: New customer offers: First-time users often get a discount on
            their initial order. Seasonal promotions: We run special deals
            during holidays and peak seasons. Happy hour discounts: Look out for
            reduced delivery fees or restaurant discounts during specific hours.
            Loyalty program: Earn points on your orders and redeem them for
            discounts on future purchases. Newsletter subscriptions: Sign up for
            our email newsletter to receive exclusive offers and promo codes.
            Referral bonuses: Invite friends to use Order.UK and both of you can
            earn credits. A Social media offers: Follow us on social platforms
            for flash sales and limited-time discounts. To stay updated on our
            latest promotions, we recommend checking our website or app
            regularly, and enabling push notifications for real-time alerts on
            new deals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default KnowMore;
