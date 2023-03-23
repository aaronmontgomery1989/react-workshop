import axios from "axios";

export interface Awardings {
    giver_coin_reward: string;
    subreddit_id: string;
    is_new: boolean;
    days_of_drip_extension: string;
    coin_price: number;
    id: string;
    penny_donate: string;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: string;
    tiers_by_required_awardings: string;
    resized_icons: Source[];
    icon_width: number;
    static_icon_width: number;
    start_date: string;
    is_enabled: boolean;
    awardings_required_to_grant_benefits: string;
    description: string;
    end_date: string;
    sticky_duration_seconds: string;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: Source[];
    icon_format: string;
    icon_height: number;
    penny_price: number;
    award_type: string;
    static_icon_url: string;
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Image {
    source: Source;
    resolutions: Source[];
    variants: object;
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface MediaEmbedded {

}

export interface Link {
    a: string;
    e: string;
    u: string;
}

export interface ChildData {
    approved_at_utc: string;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: string;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: Link[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: string;
    top_awarded_type: string;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbedded;
    thumbnail_width: string;
    author_flair_template_id: string;
    is_original_content: boolean;
    user_reports: [];
    secure_media: string;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: string;
    secure_media_embed: object;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by: string;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: string;
    author_flair_richtext: [];
    gildings: object;
    post_hint: string;
    content_categories: string;
    is_self: boolean;
    mod_note: string;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: string;
    banned_by: string;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: string;
    likes: number;
    suggested_sort: number;
    banned_at_utc: number;
    view_count: number;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: Awardings[];
    awarders: [];
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    treatment_tags: [];
    visited: boolean;
    removed_by: string;
    num_reports: number;
    distinguished: string;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: string;
    removal_reason: string;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons: string;
    author: string;
    discussion_type: string;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: [];
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: string;
    is_video: boolean;
}

export interface Children {
    kind: string;
    data: ChildData;
}

export interface Data {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: Children[];
}

export interface Response {
    kind: string;
    data: Data;
}

export const getRedditData = (): Promise<Response> => {
    return axios
        .get("https://www.reddit.com/r/aww/.json")
        .then((res) => res.data);
};
