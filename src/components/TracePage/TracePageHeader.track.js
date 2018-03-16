// @flow

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { getToggleValue, OPEN } from '../../utils/tracking/common';
import getEventTracker from '../../utils/tracking/get-event-tracker';

const CATEGORY_ALT_VIEW = 'jaeger/ux/trace/alt-view';
const CATEGORY_SLIM_HEADER = 'jaeger/ux/trace/slim-header';

export const trackAltViewOpen = getEventTracker(CATEGORY_ALT_VIEW, OPEN);

export const trackSlimHeaderToggle = getEventTracker(CATEGORY_SLIM_HEADER, getToggleValue);