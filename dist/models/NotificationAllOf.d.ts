import { Button } from './Button';
import { NotificationAllOfAndroidBackgroundLayout } from './NotificationAllOfAndroidBackgroundLayout';
import { StringMap } from './StringMap';
export declare class NotificationAllOf {
    'id'?: string;
    'value'?: number;
    'aggregation'?: NotificationAllOfAggregationEnum;
    'is_ios'?: boolean;
    'is_android'?: boolean;
    'is_huawei'?: boolean;
    'is_any_web'?: boolean;
    'is_chrome_web'?: boolean;
    'is_firefox'?: boolean;
    'is_safari'?: boolean;
    'is_wp_wns'?: boolean;
    'is_adm'?: boolean;
    'is_chrome'?: boolean;
    'channel_for_external_user_ids'?: string;
    'app_id'?: string;
    'external_id'?: string;
    'contents'?: StringMap;
    'headings'?: StringMap;
    'subtitle'?: StringMap;
    'data'?: any;
    'huawei_msg_type'?: string;
    'url'?: string;
    'web_url'?: string;
    'app_url'?: string;
    'ios_attachments'?: any;
    'template_id'?: string;
    'content_available'?: boolean;
    'mutable_content'?: boolean;
    'target_content_identifier'?: string;
    'big_picture'?: string;
    'huawei_big_picture'?: string;
    'adm_big_picture'?: string;
    'chrome_big_picture'?: string;
    'chrome_web_image'?: string;
    'buttons'?: Array<Button>;
    'web_buttons'?: Array<Button>;
    'ios_category'?: string;
    'android_channel_id'?: string;
    'huawei_channel_id'?: string;
    'existing_android_channel_id'?: string;
    'huawei_existing_channel_id'?: string;
    'android_background_layout'?: NotificationAllOfAndroidBackgroundLayout;
    'small_icon'?: string;
    'huawei_small_icon'?: string;
    'large_icon'?: string;
    'huawei_large_icon'?: string;
    'adm_small_icon'?: string;
    'adm_large_icon'?: string;
    'chrome_web_icon'?: string;
    'chrome_web_badge'?: string;
    'firefox_icon'?: string;
    'chrome_icon'?: string;
    'ios_sound'?: string;
    'android_sound'?: string;
    'huawei_sound'?: string;
    'adm_sound'?: string;
    'wp_wns_sound'?: string;
    'android_led_color'?: string;
    'huawei_led_color'?: string;
    'android_accent_color'?: string;
    'huawei_accent_color'?: string;
    'android_visibility'?: number;
    'huawei_visibility'?: number;
    'ios_badge_type'?: string;
    'ios_badge_count'?: number;
    'collapse_id'?: string;
    'web_push_topic'?: string;
    'apns_alert'?: any;
    'send_after'?: string;
    'delayed_option'?: string;
    'delivery_time_of_day'?: string;
    'ttl'?: number;
    'priority'?: number;
    'apns_push_type_override'?: string;
    'throttle_rate_per_minute'?: string;
    'android_group'?: string;
    'android_group_message'?: string;
    'adm_group'?: string;
    'adm_group_message'?: any;
    'thread_id'?: string;
    'summary_arg'?: string;
    'summary_arg_count'?: number;
    'email_subect'?: string;
    'email_body'?: string;
    'email_from_name'?: string;
    'email_from_address'?: string;
    'sms_from'?: string;
    'sms_media_urls'?: Array<string>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare type NotificationAllOfAggregationEnum = "sum" | "count";
