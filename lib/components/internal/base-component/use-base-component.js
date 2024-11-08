// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { initAwsUiVersions, useComponentMetadata, } from "@cloudscape-design/component-toolkit/internal";
import { PACKAGE_SOURCE, PACKAGE_VERSION } from "../environment";
import useFocusVisible from "../utils/focus-visible";
import { useTelemetry } from "./use-telemetry";
initAwsUiVersions(PACKAGE_SOURCE, PACKAGE_VERSION);
/**
 * This hook is used for components which are exported to customers. The returned __internalRootRef needs to be
 * attached to the (internal) component's root DOM node. The hook takes care of attaching the metadata to this
 * root DOM node and emits the telemetry for this component.
 */
export default function useBaseComponent(componentName, config) {
    useTelemetry(componentName, config);
    useFocusVisible();
    const elementRef = useComponentMetadata(componentName, PACKAGE_VERSION);
    return { __internalRootRef: elementRef };
}
//# sourceMappingURL=use-base-component.js.map