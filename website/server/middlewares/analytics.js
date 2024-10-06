export default function attachAnalytics (req, res, next) {
  res.analytics = {
    track: () => { },
    trackPurchase: () => { },
  };

  next();
}
