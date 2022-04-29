/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type {
  GetNotifications200,
  GetNotificationsParams,
  PostNotificationsNotificationResend200,
  PostNotificationsNotificationResendBody,
} from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Retrieves a list of Notifications.
 * @summary List Notifications
 */
export const getNotifications = (params?: GetNotificationsParams) => {
  return getClient<GetNotifications200>({
    url: `/admin/notifications`,
    method: "get",
    params,
  })
}
/**
 * Resends a previously sent notifications, with the same data but optionally to a different address
 * @summary Resend Notification
 */
export const postNotificationsNotificationResend = (
  id: string,
  postNotificationsNotificationResendBody: PostNotificationsNotificationResendBody
) => {
  return getClient<PostNotificationsNotificationResend200>({
    url: `/admin/notifications/${id}/resend`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postNotificationsNotificationResendBody,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type GetNotificationsResult = NonNullable<
  AsyncReturnType<typeof getNotifications>
>
export type PostNotificationsNotificationResendResult = NonNullable<
  AsyncReturnType<typeof postNotificationsNotificationResend>
>