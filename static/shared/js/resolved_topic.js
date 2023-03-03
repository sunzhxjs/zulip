/** The canonical form of the resolved-topic prefix. */
export const RESOLVED_TOPIC_PREFIX = "✔ ";
export const PINNED_TOPIC_PREFIX = "📌 ";


export function is_resolved(topic_name) {
    return topic_name.startsWith(RESOLVED_TOPIC_PREFIX) || topic_name.indexOf(RESOLVED_TOPIC_PREFIX) == 3;
}

export function resolve_name(topic_name) {
    if (topic_name.startsWith(PINNED_TOPIC_PREFIX)) {
        return topic_name.slice(0, 3) + RESOLVED_TOPIC_PREFIX + topic_name.slice(3)
    } else {
        return RESOLVED_TOPIC_PREFIX + topic_name;
    }
}

/**
 * The un-resolved form of this topic name.
 *
 * If the topic is already not a resolved topic, this is the identity.
 */
export function unresolve_name(topic_name) {
    return topic_name.replace(RESOLVED_TOPIC_PREFIX, "");
}

/**
 * Split the topic name for display, into a "resolved" prefix and remainder.
 *
 * The prefix is always the canonical resolved-topic prefix, or empty.
 *
 * This function is injective: different topics never produce the same
 * result, even when `unresolve_name` would give the same result.  That's a
 * property we want when listing topics in the UI, so that we don't end up
 * showing what look like several identical topics.
 */
export function display_parts(topic_name) {
    return is_resolved(topic_name)
        ? [RESOLVED_TOPIC_PREFIX, topic_name.slice(RESOLVED_TOPIC_PREFIX.length)]
        : ["", topic_name];
}
