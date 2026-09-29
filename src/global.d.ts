import type messages from "../messages/it.json";

/* Types every translation key against messages/it.json, so a renamed or
   missing key is a compile error rather than a blank on the page. */
declare module "next-intl" {
  interface AppConfig {
    Locale: "it";
    Messages: typeof messages;
  }
}
