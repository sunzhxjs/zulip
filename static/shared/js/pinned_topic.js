
export const PINNED_TOPIC_PREFIX = "📌 ";

const PINNED_TOPIC_PREFIX_RE = /^📌 [ 📌]*/;

export function is_pinned(topic_name) {
    return topic_name.startsWith(PINNED_TOPIC_PREFIX);
}

export function pinned_name(topic_name) {
    return PINNED_TOPIC_PREFIX + topic_name;
}

export function unpinned_name(topic_name) {
    return topic_name.replace(PINNED_TOPIC_PREFIX_RE, "");
}

export function display_parts(topic_name) {
    return is_pinned(topic_name)
        ? [PINNED_TOPIC_PREFIX, topic_name.slice(PINNED_TOPIC_PREFIX.length)]
        : ["", topic_name];
}
