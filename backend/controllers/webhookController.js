import Razorpay from "razorpay";
import Subscription from "../models/subscriptionModel.js";
import User from "../models/userModel.js";

export const PLANS = {
  plan_RlxdrptE28xiON: {
    storageQuotaBytes: 2 * 1024 ** 4,
  },
  plan_Rlxf7jfIAo9xox: {
    storageQuotaBytes: 2 * 1024 ** 4,
  },
  plan_RlxgHQq1ZNyB15: {
    storageQuotaBytes: 5 * 1024 ** 4,
  },
  plan_RlxhfMaqXOrDrC: {
    storageQuotaBytes: 5 * 1024 ** 4,
  },
  plan_RlxizQ7C6qTVCb: {
    storageQuotaBytes: 10 * 1024 ** 4,
  },
  plan_RlxkYrjxO1HRs3: {
    storageQuotaBytes: 10 * 1024 ** 4,
  },
};

// webhook endpoints
export const handleRazorpayWebhook = async (req, res) => {
  console.log(req.body);
  const signature = req.headers["x-razorpay-signature"];
  const isSignatureValid = Razorpay.validateWebhookSignature(
    JSON.stringify(req.body),
    signature,
    process.env.RAZORPAY_WEBHOOK_SECRET
  );
  if (isSignatureValid) {
    console.log("Signature verified");
    
    if (req.body.event === "subscription.activated") {
      const rzpSubscription = req.body.payload.subscription.entity;
      const planId = rzpSubscription.plan_id;
      const subscription = await Subscription.findOne({
        razorpaySubscriptionId: rzpSubscription.id,
      });
      subscription.status = rzpSubscription.status;
      await subscription.save();
      const storageQuotaBytes = PLANS[planId].storageQuotaBytes;
      const user = await User.findById(subscription.userId);
      user.maxStorageInBytes = storageQuotaBytes;
      await user.save();
      console.log("subscription activated");
    }
  } else {
    console.log("Signature not verified");
  }
  res.end("OK");
};
