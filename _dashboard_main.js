
            document.addEventListener("DOMContentLoaded", () => {
                const initialDashboardSection = "tong-quan";
                const sheetUrlInput = document.getElementById("sheet-url-input");
                const sheetNameInput = document.getElementById("sheet-name-input");
                const setSheetForm = document.querySelector("form[action='/set-sheet']");
                const setColumnsForm = document.getElementById("set-columns-form");
                const setSheetSubmitBtn = setSheetForm?.querySelector("button[type='submit']");
                const setColumnsSubmitBtn = setColumnsForm?.querySelector("button[type='submit']");
                const sheetTabsState = document.getElementById("sheet-tabs-state");
                const sheetTabsList = document.getElementById("sheet-tabs-list");
                const sheetNameOptions = document.getElementById("sheet-name-options");
                const scheduleForm = document.querySelector("form[action='/set-schedule']");
                const scheduleSheetSearch = document.getElementById("schedule-sheet-search");
                const scheduleSheetDatalist = document.getElementById("schedule-sheet-datalist");
                const scheduleSheetSelect = document.getElementById("schedule-sheet-select");
                const scheduleModeSelect = document.getElementById("schedule-mode-select");
                const scheduleWeekdayShell = document.getElementById("schedule-weekday-shell");
                const scheduleMonthdateShell = document.getElementById("schedule-monthdate-shell");
                const weekdaySelect = document.getElementById("schedule-weekday-select");
                const monthDateInput = document.getElementById("schedule-monthdate-input");
                const monthDayInput = document.querySelector("input[name='monthday']");
                const endDateInput = document.getElementById("schedule-enddate-input");
                const monthDateBtn = document.getElementById("monthdate-picker-btn");
                const endDateBtn = document.getElementById("enddate-picker-btn");
                const scheduleMonthdateHelp = document.getElementById("schedule-monthdate-help");
                const scheduleBoundSheetName = document.getElementById("schedule-bound-sheet-name");
                const scheduleBoundSheetId = document.getElementById("schedule-bound-sheet-id");
                const scheduleBoundScope = document.getElementById("schedule-bound-scope");
                const scheduleBoundLink = document.getElementById("schedule-bound-link");
                const scheduleTrackNext = document.getElementById("schedule-track-next");
                const scheduleTrackStarted = document.getElementById("schedule-track-started");
                const scheduleTrackFinished = document.getElementById("schedule-track-finished");
                const scheduleTrackDuration = document.getElementById("schedule-track-duration");
                const scheduleTrackRunning = document.getElementById("schedule-track-running");
                const scheduleTrackStatus = document.getElementById("schedule-track-status");
                const scheduleTrackSource = document.getElementById("schedule-track-source");
                const scheduleTrackSheet = document.getElementById("schedule-track-sheet");
                const scheduleTrackProcessed = document.getElementById("schedule-track-processed");
                const scheduleTrackSuccess = document.getElementById("schedule-track-success");
                const scheduleTrackFailed = document.getElementById("schedule-track-failed");
                const scheduleTrackHistory = document.getElementById("schedule-track-history");
                const scheduleTrackList = document.getElementById("schedule-track-list");
                const scheduleTrackActiveName = document.getElementById("schedule-track-active-name");
                const scheduleTrackCalendarTitle = document.getElementById("schedule-track-calendar-title");
                const scheduleTrackCalendarSubtext = document.getElementById("schedule-track-calendar-subtext");
                const scheduleTrackCalendar = document.getElementById("schedule-track-calendar");
                const scheduleTrackDetailBody = document.getElementById("schedule-track-detail-body");
                const scheduleTrackEmptyState = document.getElementById("schedule-track-empty-state");
                const scheduleTargetSummary = document.getElementById("schedule-target-summary");
                const dashboardShell = document.getElementById("dashboard-shell");
                const sidebarCollapseToggle = document.getElementById("sidebar-collapse-toggle");
                const sidebarCollapseIcon = document.getElementById("sidebar-collapse-icon");
                const themeToggle = document.getElementById("theme-toggle");
                const themeToggleIcon = document.getElementById("theme-toggle-icon");
                const themeToggleLabel = document.getElementById("theme-toggle-label");
                const themeToggleMeta = document.getElementById("theme-toggle-meta");
                const authPolicyText = document.getElementById("auth-policy-text");
                const saveAccessPolicyBtn = document.getElementById("save-access-policy-btn");
                const mailSmtpHost = document.getElementById("mail-smtp-host");
                const mailSmtpPort = document.getElementById("mail-smtp-port");
                const mailSmtpUser = document.getElementById("mail-smtp-user");
                const mailSmtpPassword = document.getElementById("mail-smtp-password");
                const mailFromEmail = document.getElementById("mail-from-email");
                const mailFromName = document.getElementById("mail-from-name");
                const mailUseTls = document.getElementById("mail-use-tls");
                const mailUseSsl = document.getElementById("mail-use-ssl");
                const saveMailConfigBtn = document.getElementById("save-mail-config-btn");
                const employeeUsersData = document.getElementById("employee-users-data");
                const employeeSearchInput = document.getElementById("employee-search-input");
                const employeeRoleFilter = document.getElementById("employee-role-filter");
                const employeeStatusChips = Array.from(document.querySelectorAll(".employee-status-chip"));
                const employeeTableBody = document.getElementById("employee-table-body");
                const employeeEmptyPanel = document.getElementById("employee-empty-panel");
                const employeeEmailInput = document.getElementById("employee-email-input");
                const employeeRoleInput = document.getElementById("employee-role-input");
                const employeeAddBtn = document.getElementById("employee-add-btn");
                const employeeCancelBtn = document.getElementById("employee-cancel-btn");
                const employeeSaveBtn = document.getElementById("employee-save-btn");
                const employeeFormTitle = document.getElementById("employee-form-title");
                const employeeFormSub = document.getElementById("employee-form-sub");
                const employeeTotalCount = document.getElementById("employee-total-count");
                const employeeVerifiedCount = document.getElementById("employee-verified-count");
                const employeeAdminCount = document.getElementById("employee-admin-count");
                const employeeChipAll = document.getElementById("employee-chip-all");
                const employeeChipPending = document.getElementById("employee-chip-pending");
                const employeeChipVerified = document.getElementById("employee-chip-verified");
                const settingsTabTriggers = Array.from(document.querySelectorAll("[data-settings-tab-trigger]"));
                const settingsTabPanes = Array.from(document.querySelectorAll("[data-settings-tab-pane]"));
                const settingsNotificationFeedback = document.getElementById("settings-notification-feedback");
                const settingsEmailNotifications = document.getElementById("settings-email-notifications");
                const settingsSystemAlerts = document.getElementById("settings-system-alerts");
                const saveNotificationSettingsBtn = document.getElementById("save-notification-settings-btn");
                const activeSheetNameEls = Array.from(document.querySelectorAll("[data-active-sheet-name]"));
                const activeSheetIdEls = Array.from(document.querySelectorAll("[data-active-sheet-id]"));
                const configModeEls = Array.from(document.querySelectorAll("[data-config-mode]"));
                const columnDetectedTextEls = Array.from(document.querySelectorAll("[data-column-detected-text]"));
                const columnInputEls = Object.fromEntries(
                    ["date", "air_date", "link", "view", "like", "share", "comment", "save"].map((field) => [
                        field,
                        document.querySelector(`[data-column-input="${field}"]`),
                    ])
                );
                const columnSourceEls = Object.fromEntries(
                    ["date", "air_date", "link", "view", "like", "share", "comment", "save"].map((field) => [
                        field,
                        document.querySelector(`[data-column-source="${field}"]`),
                    ])
                );
                const sheetCampaignNameInput = document.getElementById("sheet-campaign-name-input");
                const sheetBrandInput = document.getElementById("sheet-brand-input");
                const sheetCampaignDescriptionInput = document.getElementById("sheet-campaign-description-input");
                const sheetMetadataGate = document.getElementById("sheet-metadata-gate");
                const sheetMetadataPanel = document.getElementById("sheet-metadata-panel");
                let monthPicker = null;
                let endPicker = null;
                let sheetTabsRequestId = 0;
                let sheetTabsDebounce = null;
                const sheetTabsCache = {};
                const normalizeSheetUrl = (value) => String(value || "").trim();
                let selectedSheetTabs = new Set();
                let scheduleSheetOptionItems = [];
                let employeeUsersState = [];
                let employeeStatusFilter = "all";
                let employeeEditingEmail = "";
                let configLocked = false;
                let pendingSheetMetadataReveal = false;

                const applySidebarCollapsed = (collapsed) => {
                    const normalizedCollapsed = Boolean(collapsed);
                    if (dashboardShell) {
                        dashboardShell.classList.toggle("is-sidebar-collapsed", normalizedCollapsed);
                    }
                    if (sidebarCollapseIcon) {
                        sidebarCollapseIcon.innerHTML = normalizedCollapsed
                            ? '<i class="fa-solid fa-angles-right"></i>'
                            : '<i class="fa-solid fa-angles-left"></i>';
                    }
                    if (sidebarCollapseToggle) {
                        const toggleText = normalizedCollapsed ? "Mở rộng menu" : "Thu gọn menu";
                        sidebarCollapseToggle.setAttribute("title", toggleText);
                        sidebarCollapseToggle.setAttribute("aria-label", toggleText);
                    }
                };

                const applyTheme = (theme) => {
                    const normalizedTheme = theme === "light" ? "light" : "dark";
                    document.documentElement.dataset.theme = normalizedTheme;
                    if (themeToggleIcon) {
                        themeToggleIcon.innerHTML = normalizedTheme === "light"
                            ? '<i class="fa-solid fa-sun"></i>'
                            : '<i class="fa-solid fa-moon"></i>';
                    }
                    if (themeToggleLabel) {
                        themeToggleLabel.textContent = normalizedTheme === "light" ? "Sáng" : "Tối";
                    }
                    if (themeToggleMeta) {
                        themeToggleMeta.textContent = normalizedTheme === "light"
                            ? "Nhấn để đổi sang tối"
                            : "Nhấn để đổi sang sáng";
                    }
                    if (themeToggle) {
                        const nextThemeText = normalizedTheme === "light" ? "Đổi sang tối" : "Đổi sang sáng";
                        themeToggle.setAttribute("title", nextThemeText);
                        themeToggle.setAttribute("aria-label", nextThemeText);
                    }
                };

                applyTheme(document.documentElement.dataset.theme || "dark");
                try {
                    applySidebarCollapsed(localStorage.getItem("dashboard_sidebar_collapsed") === "1");
                } catch (_) {
                    applySidebarCollapsed(false);
                }
                if (themeToggle) {
                    themeToggle.addEventListener("click", () => {
                        const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
                        applyTheme(nextTheme);
                        try {
                            localStorage.setItem("dashboard_theme", nextTheme);
                        } catch (_) {
                        }
                    });
                }
                if (sidebarCollapseToggle) {
                    sidebarCollapseToggle.addEventListener("click", () => {
                        const nextCollapsed = !dashboardShell?.classList.contains("is-sidebar-collapsed");
                        applySidebarCollapsed(nextCollapsed);
                        try {
                            localStorage.setItem("dashboard_sidebar_collapsed", nextCollapsed ? "1" : "0");
                        } catch (_) {
                        }
                    });
                }

                const restoreDraft = (el, key) => {
                    if (!el) return;
                    const saved = sessionStorage.getItem(key);
                    if (saved && (!el.value || el.value.trim() === "")) {
                        el.value = saved;
                    }
                    el.addEventListener("input", () => sessionStorage.setItem(key, el.value));
                };

                restoreDraft(sheetUrlInput, "draft_sheet_url");
                restoreDraft(sheetNameInput, "draft_sheet_name");

                const setSettingsNotificationFeedback = (message = "", level = "info") => {
                    if (!settingsNotificationFeedback) return;
                    if (!message) {
                        settingsNotificationFeedback.textContent = "";
                        settingsNotificationFeedback.className = "settings-inline-feedback hidden";
                        return;
                    }
                    const normalized = ["success", "warning", "error", "info"].includes(level) ? level : "info";
                    settingsNotificationFeedback.textContent = message;
                    settingsNotificationFeedback.className = `settings-inline-feedback is-${normalized}`;
                };

                const setActiveSettingsTab = (tabId, options = {}) => {
                    const availableIds = settingsTabPanes
                        .map((pane) => pane.dataset.settingsTabPane || "")
                        .filter(Boolean);
                    const targetId = availableIds.includes(tabId) ? tabId : (availableIds[0] || "notifications");
                    settingsTabTriggers.forEach((trigger) => {
                        trigger.classList.toggle("is-active", trigger.dataset.settingsTabTrigger === targetId);
                    });
                    settingsTabPanes.forEach((pane) => {
                        pane.classList.toggle("hidden", pane.dataset.settingsTabPane !== targetId);
                    });
                    if (options.persist !== false) {
                        try {
                            localStorage.setItem("settings_active_tab", targetId);
                        } catch (_) {
                        }
                    }
                };

                settingsTabTriggers.forEach((trigger) => {
                    trigger.addEventListener("click", () => {
                        setActiveSettingsTab(trigger.dataset.settingsTabTrigger || "notifications");
                    });
                });
                try {
                    const settingsAliasTab =
                        window.location.pathname === "/nhan-vien"
                            ? "employees"
                            : window.location.pathname === "/chien-dich"
                                ? "campaigns"
                                : "";
                    const savedSettingsTab = localStorage.getItem("settings_active_tab");
                    setActiveSettingsTab(settingsAliasTab || savedSettingsTab || "notifications", { persist: false });
                } catch (_) {
                    setActiveSettingsTab(
                        window.location.pathname === "/nhan-vien"
                            ? "employees"
                            : window.location.pathname === "/chien-dich"
                                ? "campaigns"
                                : "notifications",
                        { persist: false }
                    );
                }
                if (saveNotificationSettingsBtn) {
                    saveNotificationSettingsBtn.addEventListener("click", async () => {
                        saveNotificationSettingsBtn.disabled = true;
                        setSettingsNotificationFeedback("Đang lưu cài đặt thông báo...", "info");
                        try {
                            const response = await fetch("/save-notification-settings", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                                body: JSON.stringify({
                                    email_notifications: Boolean(settingsEmailNotifications?.checked),
                                    system_alerts: Boolean(settingsSystemAlerts?.checked),
                                }),
                            });
                            const data = await response.json();
                            applyStatusState(data);
                            setSettingsNotificationFeedback(
                                data.message || (data.ok ? "Đã lưu cài đặt thông báo." : "Không lưu được cài đặt thông báo."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        } catch (_) {
                            setSettingsNotificationFeedback("Không lưu được cài đặt thông báo. Vui lòng thử lại.", "error");
                        } finally {
                            saveNotificationSettingsBtn.disabled = false;
                        }
                    });
                }

                const setSheetTabsMessage = (message = "", tone = "muted") => {
                    if (!sheetTabsState) return;
                    const toneMap = {
                        muted: "text-slate-500",
                        loading: "text-cyan-300",
                        success: "text-emerald-300",
                        error: "text-amber-300",
                    };
                    sheetTabsState.className = `text-xs ${
                        toneMap[tone] || toneMap.muted
                    }`;
                    sheetTabsState.textContent = message;
                };

                const clearSheetTabs = () => {
                    if (sheetNameOptions) {
                        sheetNameOptions.innerHTML = "";
                    }
                    if (sheetTabsList) {
                        sheetTabsList.innerHTML = "";
                        sheetTabsList.classList.add("hidden");
                    }
                };

                const colConfigTabBar = document.getElementById("col-config-tab-bar");
                const colConfigApplyNote = document.getElementById("col-config-apply-note");
                const colConfigActiveTabInput = document.getElementById("col-config-active-tab-input");
                let colConfigActiveTab = "";
                // Cache of per-tab input values keyed by tab name: { tabName: { link:"C", like:"F", ... } }
                let tabColConfigCache = {};
                // Authoritative server-saved per-tab overrides received via polling
                let serverColConfigByTab = {};

                // Gather current values of all column config inputs into a plain object
                const readColConfigInputs = () => {
                    const result = {};
                    document.querySelectorAll("[data-column-input]").forEach((el) => {
                        result[el.dataset.columnInput] = el.value || "";
                    });
                    // also grab start_row and hidden fields
                    const srEl = document.querySelector("[form='set-columns-form'][name='start_row']");
                    if (srEl) result["start_row"] = srEl.value || "";
                    return result;
                };

                // Write a cached/server config object back into the form inputs
                const writeColConfigInputs = (cfg) => {
                    if (!cfg || typeof cfg !== "object") return;
                    document.querySelectorAll("[data-column-input]").forEach((el) => {
                        const key = el.dataset.columnInput;
                        if (key in cfg) el.value = cfg[key];
                    });
                    const srEl = document.querySelector("[form='set-columns-form'][name='start_row']");
                    if (srEl && "start_row" in cfg) srEl.value = cfg["start_row"];
                };

                const resetTabColBtn = document.getElementById("reset-tab-col-config-btn");
                const updateResetTabBtnVisibility = () => {
                    if (!resetTabColBtn) return;
                    // Show whenever a specific tab is active (so user can always reset)
                    const hasActiveTab = !!colConfigActiveTab;
                    resetTabColBtn.classList.toggle("hidden", !hasActiveTab);
                };
                if (resetTabColBtn) {
                    resetTabColBtn.addEventListener("click", async () => {
                        const tab = colConfigActiveTab;
                        if (!tab) return;
                        if (!confirm(`Reset cấu hình cột của tab "${tab}" về AUTO detect?`)) return;
                        try {
                            const resp = await fetch(`/clear-tab-columns?tab_name=${encodeURIComponent(tab)}`, {
                                headers: {"X-Requested-With": "fetch"},
                                cache: "no-store",
                            });
                            const data = await resp.json();
                            if (data.ok) {
                                delete serverColConfigByTab[tab];
                                delete tabColConfigCache[tab];
                                // Re-fetch auto-detected values for this tab
                                fetch(`/detect-tab-columns?tab_name=${encodeURIComponent(tab)}`, {
                                    headers: {"X-Requested-With": "fetch"},
                                    cache: "no-store",
                                }).then(r => r.json()).then(d => {
                                    if (d.ok && d.detected_inputs && colConfigActiveTab === tab) {
                                        writeColConfigInputs(d.detected_inputs);
                                        if (d.start_row) {
                                            const srEl = document.querySelector("[form='set-columns-form'][name='start_row']");
                                            if (srEl) srEl.value = d.start_row;
                                        }
                                    }
                                }).catch(() => {});
                                applyColumnConfigState(data);
                                updateResetTabBtnVisibility();
                                showNotice(data.message || "Đã reset về AUTO.", "success");
                            } else {
                                showNotice(data.message || "Không reset được.", "error");
                            }
                        } catch (_) {
                            showNotice("Không kết nối được.", "error");
                        }
                    });
                }

                const renderColConfigTabBar = (switchToTab) => {
                    if (!colConfigTabBar) return;
                    const tabs = Array.from(selectedSheetTabs);
                    if (tabs.length <= 1) {
                        colConfigTabBar.classList.add("hidden");
                        colConfigTabBar.classList.remove("flex");
                        const singleTab = tabs.length === 1 ? tabs[0] : "";
                        if (colConfigApplyNote) colConfigApplyNote.textContent = singleTab
                            ? `Cấu hình riêng cho tab: ${singleTab}`
                            : "Cấu hình đã được áp dụng cho sheet đã chọn.";
                        if (colConfigActiveTabInput) colConfigActiveTabInput.value = singleTab;
                        // Load this tab's saved config if we just switched to it
                        if (singleTab && singleTab !== colConfigActiveTab) {
                            if (colConfigActiveTab) tabColConfigCache[colConfigActiveTab] = readColConfigInputs();
                            const cached = tabColConfigCache[singleTab];
                            const serverSaved = serverColConfigByTab[singleTab];
                            if (cached) writeColConfigInputs(cached);
                            else if (serverSaved) writeColConfigInputs(serverSaved);
                            else {
                                fetch(`/detect-tab-columns?tab_name=${encodeURIComponent(singleTab)}`, {
                                    headers: {"X-Requested-With": "fetch"},
                                    cache: "no-store",
                                }).then(r => r.json()).then(data => {
                                    if (data.ok && data.detected_inputs && colConfigActiveTab === singleTab) {
                                        writeColConfigInputs(data.detected_inputs);
                                        if (data.start_row) {
                                            const srEl = document.querySelector("[form='set-columns-form'][name='start_row']");
                                            if (srEl && document.activeElement !== srEl) srEl.value = data.start_row;
                                        }
                                    }
                                }).catch(() => {});
                            }
                        }
                        colConfigActiveTab = singleTab;
                        updateResetTabBtnVisibility();
                        return;
                    }
                    colConfigTabBar.classList.remove("hidden");
                    colConfigTabBar.classList.add("flex");

                    const prevTab = colConfigActiveTab;
                    // Determine which tab to show
                    let nextTab = switchToTab || colConfigActiveTab;
                    if (!nextTab || !tabs.includes(nextTab)) nextTab = tabs[0];

                    // Save current inputs to cache for the previous tab (before switching)
                    if (prevTab && prevTab !== nextTab) {
                        tabColConfigCache[prevTab] = readColConfigInputs();
                    }

                    // Switch to new tab
                    colConfigActiveTab = nextTab;
                    if (colConfigActiveTabInput) colConfigActiveTabInput.value = nextTab;
                    updateResetTabBtnVisibility();

                    // Load inputs for the new active tab from cache, then fall back to server data
                    if (prevTab !== nextTab) {
                        const cached = tabColConfigCache[nextTab];
                        const serverSaved = serverColConfigByTab[nextTab];
                        if (cached) {
                            writeColConfigInputs(cached);
                        } else if (serverSaved) {
                            writeColConfigInputs(serverSaved);
                        } else {
                            // No saved config for this tab — fetch auto-detected columns from server
                            fetch(`/detect-tab-columns?tab_name=${encodeURIComponent(nextTab)}`, {
                                headers: {"X-Requested-With": "fetch"},
                                cache: "no-store",
                            }).then(r => r.json()).then(data => {
                                if (data.ok && data.detected_inputs && colConfigActiveTab === nextTab) {
                                    writeColConfigInputs(data.detected_inputs);
                                    if (data.start_row) {
                                        const srEl = document.querySelector("[form='set-columns-form'][name='start_row']");
                                        if (srEl && document.activeElement !== srEl) srEl.value = data.start_row;
                                    }
                                }
                            }).catch(() => {});
                        }
                    }

                    colConfigTabBar.innerHTML = tabs.map((t) => {
                        const isAct = t === colConfigActiveTab;
                        return `<button type="button" data-col-tab="${t}" style="padding:6px 14px 8px;font-size:12px;font-weight:800;border-radius:8px 8px 0 0;border:none;cursor:pointer;transition:.15s;${
                            isAct
                                ? "background:rgba(14,165,233,0.14);color:#7dd3fc;border-bottom:2px solid #38bdf8;"
                                : "background:transparent;color:#64748b;border-bottom:2px solid transparent;"
                        }">${t}</button>`;
                    }).join("");
                    if (colConfigApplyNote) colConfigApplyNote.textContent = `Cấu hình riêng cho tab: ${colConfigActiveTab}`;
                    colConfigTabBar.querySelectorAll("[data-col-tab]").forEach((btn) => {
                        btn.addEventListener("click", () => {
                            renderColConfigTabBar(btn.dataset.colTab || "");
                        });
                    });
                };

                const renderSheetTabs = (tabs) => {
                    if (sheetNameOptions) {
                        sheetNameOptions.innerHTML = tabs
                            .map((tab) => `<option value="${tab.title}"></option>`)
                            .join("");
                    }
                    if (!sheetTabsList) return;
                    if (!tabs.length) {
                        sheetTabsList.innerHTML = "";
                        sheetTabsList.classList.add("hidden");
                        return;
                    }
                    const count = selectedSheetTabs.size;
                    const countBadge = count > 0
                        ? `<span style="margin-left:6px;background:rgba(16,185,129,0.18);color:#6ee7b7;border:1px solid rgba(52,211,153,0.22);border-radius:999px;padding:1px 10px;font-size:12px;font-weight:800;">${count} tab</span>`
                        : "";
                    const selectAllBtn = `<button type="button" id="sheet-tabs-select-all" style="font-size:12px;color:#94a3b8;background:none;border:none;cursor:pointer;padding:0;font-weight:700;">Chọn tất cả</button>`;
                    const clearBtn = count > 0 ? `<button type="button" id="sheet-tabs-clear" style="font-size:12px;color:#f87171;background:none;border:none;cursor:pointer;padding:0 0 0 10px;font-weight:700;">Bỏ chọn</button>` : "";
                    const header = `<div style="display:flex;align-items:center;gap:4px;margin-bottom:8px;flex-wrap:wrap;">
                        <span style="font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">Tab được quét${countBadge}</span>
                        <span style="flex:1"></span>${selectAllBtn}${clearBtn}
                    </div>`;
                    sheetTabsList.innerHTML = header + tabs
                        .map((tab) => {
                            const isActive = selectedSheetTabs.has(tab.title);
                            const activeClass = isActive ? " is-active" : "";
                            const checkIcon = isActive ? `<i class="fa-solid fa-check" style="font-size:10px;"></i>` : "";
                            return `<button type="button" class="sheet-tab-chip${activeClass}" data-sheet-tab="${tab.title}">${checkIcon}${tab.title}</button>`;
                        })
                        .join("");
                    sheetTabsList.classList.remove("hidden");
                    sheetTabsList.querySelectorAll("[data-sheet-tab]").forEach((button) => {
                        button.addEventListener("click", () => {
                            const tabTitle = button.dataset.sheetTab || "";
                            if (selectedSheetTabs.has(tabTitle)) {
                                selectedSheetTabs.delete(tabTitle);
                            } else {
                                selectedSheetTabs.add(tabTitle);
                            }
                            // Keep sheetNameInput synced to last clicked tab (for Nhập Sheet form)
                            if (sheetNameInput) {
                                sheetNameInput.value = tabTitle;
                                sessionStorage.setItem("draft_sheet_name", tabTitle);
                            }
                            renderSheetTabs(tabs);
                        });
                    });
                    const selectAllBtnEl = document.getElementById("sheet-tabs-select-all");
                    if (selectAllBtnEl) {
                        selectAllBtnEl.addEventListener("click", () => {
                            tabs.forEach((tab) => selectedSheetTabs.add(tab.title));
                            if (sheetNameInput && tabs.length) {
                                sheetNameInput.value = tabs[0].title;
                                sessionStorage.setItem("draft_sheet_name", tabs[0].title);
                            }
                            renderSheetTabs(tabs);
                        });
                    }
                    const clearBtnEl = document.getElementById("sheet-tabs-clear");
                    if (clearBtnEl) {
                        clearBtnEl.addEventListener("click", () => {
                            selectedSheetTabs.clear();
                            renderSheetTabs(tabs);
                        });
                    }
                    renderColConfigTabBar();
                };

                const snapshotScheduleSheetOptions = () => {
                    if (!scheduleSheetSelect) return;
                    scheduleSheetOptionItems = Array.from(scheduleSheetSelect.options).map((option) => ({
                        value: option.value || "",
                        label: option.textContent || "",
                    })).filter((item) => item.value && item.label && item.label !== "Chưa có sheet nào để chọn");
                };

                const getScheduleSheetMatches = (rawValue = "") => {
                    const normalizedFilter = String(rawValue || "").trim().toLowerCase();
                    if (!normalizedFilter) {
                        return [...scheduleSheetOptionItems];
                    }
                    return scheduleSheetOptionItems.filter((item) => String(item.label || "").toLowerCase().includes(normalizedFilter));
                };

                const resolveScheduleSheetItem = (rawValue = "") => {
                    const normalizedValue = String(rawValue || "").trim().toLowerCase();
                    if (!normalizedValue) return null;
                    const exactMatch = scheduleSheetOptionItems.find((item) => {
                        const label = String(item.label || "").trim().toLowerCase();
                        const value = String(item.value || "").trim().toLowerCase();
                        return label === normalizedValue || value === normalizedValue;
                    });
                    if (exactMatch) return exactMatch;
                    const matches = getScheduleSheetMatches(rawValue);
                    return matches.length === 1 ? matches[0] : null;
                };

                const renderScheduleSheetOptions = (filterValue = "", preferredValue = "") => {
                    if (scheduleSheetDatalist) {
                        const visibleItems = getScheduleSheetMatches(filterValue);
                        scheduleSheetDatalist.innerHTML = "";
                        visibleItems.forEach((item) => {
                            const option = document.createElement("option");
                            option.value = item.label;
                            scheduleSheetDatalist.appendChild(option);
                        });
                    }
                    if (!scheduleSheetSelect) return;
                    if (!scheduleSheetOptionItems.length) {
                        scheduleSheetSelect.value = "";
                        scheduleSheetSelect.disabled = true;
                        if (scheduleSheetSearch && document.activeElement !== scheduleSheetSearch) {
                            scheduleSheetSearch.value = "";
                        }
                        return;
                    }
                    scheduleSheetSelect.disabled = false;
                    const preferredItem = scheduleSheetOptionItems.find((item) => item.value === String(preferredValue || "").trim());
                    const resolvedItem = preferredItem || resolveScheduleSheetItem(filterValue);
                    if (resolvedItem) {
                        scheduleSheetSelect.value = resolvedItem.value;
                        if (scheduleSheetSearch && document.activeElement !== scheduleSheetSearch) {
                            scheduleSheetSearch.value = resolvedItem.label;
                        }
                        return;
                    }
                    if (!String(filterValue || "").trim()) {
                        const fallbackItem = scheduleSheetOptionItems.find((item) => item.value === String(scheduleSheetSelect.value || "").trim())
                            || scheduleSheetOptionItems[0];
                        if (fallbackItem) {
                            scheduleSheetSelect.value = fallbackItem.value;
                            if (scheduleSheetSearch && document.activeElement !== scheduleSheetSearch) {
                                scheduleSheetSearch.value = fallbackItem.label;
                            }
                        }
                    } else {
                        scheduleSheetSelect.value = "";
                    }
                };

                const commitScheduleSheetSearch = async (showToast = false) => {
                    if (!scheduleSheetSearch || !scheduleSheetSelect) return null;
                    const resolvedItem = resolveScheduleSheetItem(scheduleSheetSearch.value || "");
                    if (!resolvedItem) {
                        scheduleSheetSelect.value = "";
                        return null;
                    }
                    scheduleSheetSearch.value = resolvedItem.label;
                    scheduleSheetSelect.value = resolvedItem.value;
                    return await selectScheduleEntry(resolvedItem.value, "form", showToast);
                };

                const rebuildScheduleSheetSelectOptions = (preferredValue = "") => {
                    if (!scheduleSheetSelect) return;
                    scheduleSheetSelect.innerHTML = "";
                    if (!scheduleSheetOptionItems.length) {
                        const option = document.createElement("option");
                        option.value = "";
                        option.textContent = "Chưa có sheet nào để chọn";
                        scheduleSheetSelect.appendChild(option);
                        scheduleSheetSelect.disabled = true;
                        return;
                    }
                    scheduleSheetOptionItems.forEach((item) => {
                        const option = document.createElement("option");
                        option.value = item.value;
                        option.textContent = item.label;
                        scheduleSheetSelect.appendChild(option);
                    });
                    scheduleSheetSelect.disabled = false;
                    if (preferredValue) {
                        scheduleSheetSelect.value = preferredValue;
                    }
                };

                const selectScheduleEntry = async (key, context = "form", showToast = false) => {
                    const normalizedKey = String(key || "").trim();
                    if (!normalizedKey && context !== "tracking") return null;
                    try {
                        const response = await fetch("/set-active-schedule", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                            body: JSON.stringify({ key: normalizedKey, context }),
                        });
                        const data = await response.json();
                        applyStatusState(data);
                        applyScheduleConfigState(data);
                        applyScheduleTrackingState(data);
                        if (showToast) {
                            showNotice(
                                data.message || (data.ok ? "Đã chọn sheet lịch." : "Không chọn được sheet lịch."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        }
                        return data;
                    } catch (_) {
                        if (showToast) {
                            showNotice("Không chọn được sheet lịch. Vui lòng thử lại.", "error");
                        }
                        return null;
                    }
                };

                snapshotScheduleSheetOptions();
                rebuildScheduleSheetSelectOptions(scheduleSheetSelect?.value || "");
                renderScheduleSheetOptions("", scheduleSheetSelect?.value || "");
                if (scheduleSheetSearch) {
                    scheduleSheetSearch.addEventListener("input", () => {
                        renderScheduleSheetOptions(scheduleSheetSearch.value, scheduleSheetSelect?.value || "");
                    });
                    scheduleSheetSearch.addEventListener("change", async () => {
                        await commitScheduleSheetSearch(false);
                    });
                    scheduleSheetSearch.addEventListener("keydown", async (event) => {
                        if (event.key !== "Enter") return;
                        event.preventDefault();
                        await commitScheduleSheetSearch(false);
                    });
                }
                if (scheduleSheetSelect) {
                    scheduleSheetSelect.addEventListener("change", async () => {
                        await selectScheduleEntry(scheduleSheetSelect.value, "form", false);
                    });
                }

                const shouldLookupSheetTabs = (value) => {
                    const trimmed = (value || "").trim();
                    return trimmed.length >= 20 || trimmed.includes("/spreadsheets/");
                };

                const fetchSheetTabs = async (value, silent = false) => {
                    const rawValue = (value || "").trim();
                    if (!rawValue) {
                        clearSheetTabs();
                        setSheetTabsMessage("Dán link Google Sheet để hiện danh sách tab có trong file.");
                        return;
                    }
                    if (!shouldLookupSheetTabs(rawValue)) {
                        clearSheetTabs();
                        setSheetTabsMessage("Tiếp tục nhập link hoặc Sheet ID để tải danh sách tab.");
                        return;
                    }

                    const cachedTabs = sheetTabsCache[rawValue];
                    if (cachedTabs) {
                        renderSheetTabs(cachedTabs.tabs);
                        setSheetTabsMessage(cachedTabs.message, "success");
                        return;
                    }

                    const requestId = ++sheetTabsRequestId;
                    if (!silent) {
                        setSheetTabsMessage("Đang tải danh sách tab...", "loading");
                    }

                    try {
                        const response = await fetch(`/sheet-tabs?sheet_url=${encodeURIComponent(rawValue)}`, {
                            headers: { "X-Requested-With": "fetch" },
                            cache: "no-store",
                        });
                        if (!response.ok) {
                            throw new Error("Không gọi được API danh sách tab.");
                        }
                        const data = await response.json();
                        if (requestId !== sheetTabsRequestId) return;

                        if (!data.ok) {
                            clearSheetTabs();
                            setSheetTabsMessage(data.message || "Không tải được danh sách tab.", "error");
                            return;
                        }
                        const tabs = Array.isArray(data.tabs) ? data.tabs : [];
                        sheetTabsCache[rawValue] = {
                            tabs,
                            message: data.message || `Tìm thấy ${tabs.length} tab trong spreadsheet.`,
                        };
                        renderSheetTabs(tabs);
                        setSheetTabsMessage(data.message || "Đã tải danh sách tab.", "success");
                    } catch (_) {
                        if (requestId !== sheetTabsRequestId) return;
                        clearSheetTabs();
                        setSheetTabsMessage("Không tải được danh sách tab. Kiểm tra link sheet và quyền truy cập.", "error");
                    }
                };

                const scheduleSheetTabsFetch = () => {
                    if (sheetTabsDebounce) {
                        clearTimeout(sheetTabsDebounce);
                    }
                    sheetTabsDebounce = setTimeout(() => {
                        fetchSheetTabs(sheetUrlInput?.value || "");
                    }, 1500);
                };

                if (sheetUrlInput) {
                    sheetUrlInput.addEventListener("input", scheduleSheetTabsFetch);
                    sheetUrlInput.addEventListener("blur", () => fetchSheetTabs(sheetUrlInput.value, true));
                }
                if (sheetNameInput) {
                    sheetNameInput.addEventListener("input", () => {
                        if (sheetTabsList && !sheetTabsList.classList.contains("hidden")) {
                            sheetTabsList.querySelectorAll("[data-sheet-tab]").forEach((button) => {
                                button.classList.toggle("is-active", (button.dataset.sheetTab || "") === sheetNameInput.value.trim());
                            });
                        }
                    });
                }
                if (sheetUrlInput?.value) {
                    fetchSheetTabs(sheetUrlInput.value, true);
                }

                const applyConfigLockState = (locked, message = "") => {
                    configLocked = Boolean(locked);
                    [setSheetSubmitBtn, setColumnsSubmitBtn].forEach((btn) => {
                        if (!btn) return;
                        btn.disabled = configLocked;
                        btn.classList.toggle("opacity-50", configLocked);
                        btn.classList.toggle("cursor-not-allowed", configLocked);
                        if (configLocked && message) {
                            btn.setAttribute("title", message);
                        } else {
                            btn.removeAttribute("title");
                        }
                    });
                };

                const submitSheetFormInline = async () => {
                    if (!setSheetForm) return null;
                    if (configLocked) {
                        const message = "Đang ở trạng thái Đã dừng. Bấm Bắt đầu để mở lại rồi hãy nhập sheet.";
                        showNotice(message, "warning");
                        return { ok: false, message };
                    }
                    const params = new URLSearchParams(new FormData(setSheetForm));
                    try {
                        const response = await fetch(`/set-sheet?${params.toString()}`, {
                            headers: { "X-Requested-With": "fetch" },
                            cache: "no-store",
                        });
                        const data = await response.json();
                        if (data.ok) {
                            sessionStorage.removeItem("draft_sheet_url");
                            sessionStorage.removeItem("draft_sheet_name");
                            applyActiveSheetMeta(data, true);
                            applyColumnConfigState(data);
                            applySheetMetadataState(data);
                            applyScheduleConfigState(data);
                            applyScheduleTrackingState(data);
                            if (typeof data.overview_html === "string") {
                                replaceOverviewPanelHtml(data.overview_html);
                            }
                            if (typeof data.posts_html === "string") {
                                replacePostsPanelHtml(data.posts_html);
                            }
                            if (typeof data.campaign_html === "string") {
                                replaceCampaignPanelHtml(data.campaign_html);
                            }
                            if (sheetUrlInput?.value) {
                                fetchSheetTabs(sheetUrlInput.value, true);
                            }
                        }
                        applyStatusState(data);
                        showNotice(
                            data.message || (data.ok ? "Đã nhập sheet thành công." : "Không nhập được sheet."),
                            data.level || (data.ok ? "success" : "error")
                        );
                        return data;
                    } catch (_) {
                        showNotice("Không nhập được sheet. Vui lòng thử lại.", "error");
                        return null;
                    }
                };

                if (setSheetForm) {
                    setSheetForm.addEventListener("submit", async (event) => {
                        event.preventDefault();
                        await submitSheetFormInline();
                    });
                }

                if (setColumnsForm) {
                    setColumnsForm.addEventListener("submit", async (event) => {
                        event.preventDefault();
                        if (configLocked) {
                            showNotice("Đang ở trạng thái Đã dừng. Bấm Bắt đầu để mở lại rồi hãy lưu sheet.", "warning");
                            return;
                        }
                        const setColumnsDraftValues = {};
                        document.querySelectorAll("[form='set-columns-form'][name]").forEach((field) => {
                            setColumnsDraftValues[field.name] = field.value || "";
                        });
                        const sheetData = await submitSheetFormInline();
                        if (!sheetData || !sheetData.ok) {
                            return;
                        }
                        document.querySelectorAll("[form='set-columns-form'][name]").forEach((field) => {
                            if (Object.prototype.hasOwnProperty.call(setColumnsDraftValues, field.name)) {
                                field.value = setColumnsDraftValues[field.name];
                            }
                        });
                        const params = new URLSearchParams();
                        document.querySelectorAll("[form='set-columns-form'][name]").forEach((field) => {
                            const rawValue = (field.value || "").trim();
                            if (field.matches("[data-column-input]")) {
                                const detectedValue = String(field.dataset.detectedValue || "").trim().toUpperCase();
                                const manualValue = String(field.dataset.manualValue || "").trim().toUpperCase();
                                const normalizedRawValue = rawValue.toUpperCase();
                                if (!rawValue) {
                                    params.set(field.name, "");
                                } else if (!manualValue && detectedValue && normalizedRawValue === detectedValue) {
                                    params.set(field.name, "");
                                } else {
                                    params.set(field.name, rawValue);
                                }
                                return;
                            }
                            params.set(field.name, rawValue);
                        });
                        try {
                            const response = await fetch(`/set-columns?${params.toString()}`, {
                                headers: { "X-Requested-With": "fetch" },
                                cache: "no-store",
                            });
                            const data = await response.json();
                            applyStatusState(data);
                            applyScheduleConfigState(data);
                            applyScheduleTrackingState(data);
                            if (data.ok) {
                                applyColumnConfigState(data);
                                pendingSheetMetadataReveal = true;
                                applySheetMetadataState(data);
                                if (typeof data.overview_html === "string") {
                                    replaceOverviewPanelHtml(data.overview_html);
                                }
                                if (typeof data.posts_html === "string") {
                                    replacePostsPanelHtml(data.posts_html);
                                }
                                if (typeof data.campaign_html === "string") {
                                    replaceCampaignPanelHtml(data.campaign_html);
                                }
                            }
                            showNotice(
                                data.message || (data.ok ? "Đã lưu sheet thành công." : "Không lưu được sheet."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        } catch (_) {
                            showNotice("Không lưu được sheet. Vui lòng thử lại.", "error");
                        }
                    });
                }

                if (saveAccessPolicyBtn && authPolicyText) {
                    saveAccessPolicyBtn.addEventListener("click", async () => {
                        try {
                            const response = await fetch("/admin/save-access-policy", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                                body: JSON.stringify({ policy_text: authPolicyText.value || "" }),
                            });
                            const data = await response.json();
                            if (data.ok && typeof data.policy_text === "string") {
                                authPolicyText.value = data.policy_text;
                            }
                            showNotice(
                                data.message || (data.ok ? "Đã lưu access policy." : "Không lưu được access policy."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        } catch (_) {
                            showNotice("Không lưu được access policy. Vui lòng thử lại.", "error");
                        }
                    });
                }

                if (saveMailConfigBtn) {
                    saveMailConfigBtn.addEventListener("click", async () => {
                        const payload = {
                            smtp_host: mailSmtpHost?.value || "",
                            smtp_port: mailSmtpPort?.value || "",
                            smtp_user: mailSmtpUser?.value || "",
                            smtp_password: mailSmtpPassword?.value || "",
                            smtp_from_email: mailFromEmail?.value || "",
                            smtp_from_name: mailFromName?.value || "",
                            use_tls: Boolean(mailUseTls?.checked),
                            use_ssl: Boolean(mailUseSsl?.checked),
                        };
                        try {
                            const response = await fetch("/admin/save-mail-config", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                                body: JSON.stringify(payload),
                            });
                            const data = await response.json();
                            showNotice(
                                data.message || (data.ok ? "Đã lưu cấu hình mail." : "Không lưu được cấu hình mail."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        } catch (_) {
                            showNotice("Không lưu được cấu hình mail. Vui lòng thử lại.", "error");
                        }
                    });
                }

                document.addEventListener("click", async (event) => {
                    const scheduleTrackButton = event.target.closest("[data-schedule-track-entry-key]");
                    if (scheduleTrackButton) {
                        event.preventDefault();
                        const isActiveScheduleTrack = scheduleTrackButton.classList.contains("is-active");
                        await selectScheduleEntry(isActiveScheduleTrack ? "" : (scheduleTrackButton.dataset.scheduleTrackEntryKey || ""), "tracking", false);
                        return;
                    }

                    const actionLink = event.target.closest("[data-inline-action]");
                    if (!actionLink) return;
                    event.preventDefault();

                    const action = actionLink.dataset.inlineAction || "";
                    const baseUrl = actionLink.getAttribute("href") || (action === "stop" ? "/stop" : "/start");
                    let requestUrl = baseUrl;
                    if (action === "start") {
                        const params = new URLSearchParams();
                        const draftSheetUrl = (sheetUrlInput?.value || "").trim();
                        const draftSheetName = (sheetNameInput?.value || "").trim();
                        if (draftSheetUrl) {
                            params.set("sheet_url", draftSheetUrl);
                        }
                        const selectedTabsArr = Array.from(selectedSheetTabs);
                        if (selectedTabsArr.length > 1) {
                            params.set("sheet_names", selectedTabsArr.join(","));
                        } else if (selectedTabsArr.length === 1) {
                            params.set("sheet_name", selectedTabsArr[0]);
                        } else if (draftSheetName) {
                            params.set("sheet_name", draftSheetName);
                        }
                        ["date", "air_date", "link", "view", "like", "share", "comment", "save", "start_row"].forEach((name) => {
                            const field = document.querySelector(`[form='set-columns-form'][name='${name}']`);
                            if (!field) return;
                            params.set(name, (field.value || "").trim());
                        });
                        if (params.toString()) {
                            requestUrl += `?${params.toString()}`;
                        }
                    }

                    try {
                        const response = await fetch(requestUrl, {
                            headers: { "X-Requested-With": "fetch" },
                            cache: "no-store",
                        });
                        const data = await response.json();
                        applyStatusState(data);
                        applyScheduleConfigState(data);
                        applyScheduleTrackingState(data);
                        if (action === "start" && data.ok) {
                            sessionStorage.removeItem("draft_sheet_url");
                            sessionStorage.removeItem("draft_sheet_name");
                            applyActiveSheetMeta(data, true);
                            applyColumnConfigState(data);
                            applySheetMetadataState(data);
                            if (typeof data.campaign_html === "string") {
                                replaceCampaignPanelHtml(data.campaign_html);
                            }
                            if (typeof data.overview_html === "string") {
                                replaceOverviewPanelHtml(data.overview_html);
                            }
                            if (sheetUrlInput?.value) {
                                fetchSheetTabs(sheetUrlInput.value, true);
                            }
                        }
                        showNotice(
                            data.message || (data.ok ? "Đã cập nhật tác vụ." : "Không thực hiện được tác vụ."),
                            data.level || (data.ok ? "success" : "error")
                        );
                    } catch (_) {
                        showNotice(
                            action === "stop"
                                ? "Không dừng được tác vụ. Vui lòng thử lại."
                                : "Không bắt đầu được tác vụ. Vui lòng thử lại.",
                            "error"
                        );
                    }
                });

                const getWeeklyJsDay = () => {
                    const normalizedWeekday = parseInt(weekdaySelect?.value || "0", 10);
                    return normalizedWeekday === 6 ? 0 : normalizedWeekday + 1;
                };
                const isScheduleWeekdayMatch = (dateObj, activeYear, activeMonth) => {
                    if (!dateObj) return false;
                    if (dateObj.getFullYear() !== activeYear || dateObj.getMonth() !== activeMonth) return false;
                    return dateObj.getDay() === getWeeklyJsDay();
                };
                const updateSchedulePreview = () => {
                    const mode = scheduleModeSelect?.value || "off";
                    if (scheduleMonthdateHelp) {
                        scheduleMonthdateHelp.textContent = mode === "weekly"
                            ? "Mở lịch để xem toàn bộ ngày đúng thứ đã chọn được khoanh sẵn."
                            : "Hằng tháng: chọn ngày chạy. Hằng tuần: mở lịch để xem các ngày của thứ đã chọn được khoanh sẵn.";
                    }
                };
                const syncScheduleModeFields = () => {
                    const mode = scheduleModeSelect?.value || "off";
                    const showWeekday = mode === "weekly";
                    const showMonthDate = mode === "weekly" || mode === "monthly";
                    if (scheduleWeekdayShell) {
                        scheduleWeekdayShell.classList.toggle("hidden", !showWeekday);
                    }
                    if (scheduleMonthdateShell) {
                        scheduleMonthdateShell.classList.toggle("hidden", !showMonthDate);
                    }
                    if (weekdaySelect) {
                        weekdaySelect.disabled = !showWeekday;
                    }
                    if (monthDateInput) {
                        monthDateInput.disabled = !showMonthDate;
                    }
                    if (monthDateBtn) {
                        monthDateBtn.disabled = !showMonthDate;
                        monthDateBtn.classList.toggle("opacity-40", !showMonthDate);
                        monthDateBtn.classList.toggle("pointer-events-none", !showMonthDate);
                    }
                };
                const syncScheduleWeekdayHighlights = () => {
                    if (!monthPicker?.calendarContainer) return;
                    const mode = scheduleModeSelect?.value || "off";
                    const activeMonth = monthPicker.currentMonth;
                    const activeYear = monthPicker.currentYear;
                    monthPicker.calendarContainer.querySelectorAll(".flatpickr-day").forEach((dayElem) => {
                        dayElem.classList.remove("schedule-weekday-match");
                        dayElem.classList.remove("schedule-today-muted");
                        if (mode !== "weekly" || !dayElem.dateObj) return;
                        if (isScheduleWeekdayMatch(dayElem.dateObj, activeYear, activeMonth)) {
                            dayElem.classList.add("schedule-weekday-match");
                        } else if (dayElem.classList.contains("today")) {
                            dayElem.classList.add("schedule-today-muted");
                        }
                    });
                };
                const redrawScheduleCalendar = () => {
                    if (monthPicker && typeof monthPicker.redraw === "function") {
                        monthPicker.redraw();
                    }
                    requestAnimationFrame(syncScheduleWeekdayHighlights);
                    setTimeout(syncScheduleWeekdayHighlights, 0);
                    updateSchedulePreview();
                };

                if (monthDateInput && typeof flatpickr === "function") {
                    monthPicker = flatpickr(monthDateInput, {
                        dateFormat: "Y-m-d",
                        altInput: true,
                        altFormat: "d/m/Y",
                        locale: (window.flatpickr && flatpickr.l10ns && flatpickr.l10ns.vn) ? "vn" : "default",
                        disableMobile: true,
                        allowInput: true,
                        onDayCreate: (_, __, fp, dayElem) => {
                            dayElem.classList.remove("schedule-weekday-match");
                            dayElem.classList.remove("schedule-today-muted");
                            const mode = scheduleModeSelect?.value || "off";
                            if (mode !== "weekly" || !dayElem.dateObj) return;
                            if (isScheduleWeekdayMatch(dayElem.dateObj, fp.currentYear, fp.currentMonth)) {
                                dayElem.classList.add("schedule-weekday-match");
                            } else if (dayElem.classList.contains("today")) {
                                dayElem.classList.add("schedule-today-muted");
                            }
                        },
                        onMonthChange: () => redrawScheduleCalendar(),
                        onYearChange: () => redrawScheduleCalendar(),
                        onOpen: () => redrawScheduleCalendar(),
                        onReady: () => redrawScheduleCalendar(),
                        onValueUpdate: () => redrawScheduleCalendar(),
                    });
                }

                if (endDateInput && typeof flatpickr === "function") {
                    endPicker = flatpickr(endDateInput, {
                        dateFormat: "Y-m-d",
                        altInput: true,
                        altFormat: "d/m/Y",
                        locale: (window.flatpickr && flatpickr.l10ns && flatpickr.l10ns.vn) ? "vn" : "default",
                        disableMobile: true,
                        allowInput: true,
                        onChange: () => updateSchedulePreview(),
                    });
                }

                if (scheduleForm && monthDateInput && monthDayInput) {
                    const syncMonthday = () => {
                        if (!monthDateInput.value) return;
                        const parts = monthDateInput.value.split("-");
                        const day = parseInt(parts[2], 10);
                        if (!Number.isNaN(day)) {
                            monthDayInput.value = Math.max(1, Math.min(28, day));
                        }
                    };
                    monthDateInput.addEventListener("change", syncMonthday);
                    scheduleForm.addEventListener("submit", syncMonthday);
                    syncMonthday();

                    scheduleForm.addEventListener("submit", async (event) => {
                        event.preventDefault();
                        syncMonthday();
                        if (scheduleSheetSearch && scheduleSheetOptionItems.length) {
                            await commitScheduleSheetSearch(false);
                            if (!String(scheduleSheetSelect?.value || "").trim()) {
                                showNotice("Hãy chọn đúng một sheet từ gợi ý trước khi lưu lịch.", "warning");
                                scheduleSheetSearch.focus();
                                return;
                            }
                        }
                        const params = new URLSearchParams(new FormData(scheduleForm));
                        try {
                            const response = await fetch(`/set-schedule?${params.toString()}`, {
                                headers: { "X-Requested-With": "fetch" },
                                cache: "no-store",
                            });
                            const data = await response.json();
                            applyStatusState(data);
                            applyScheduleConfigState(data);
                            applyScheduleTrackingState(data);
                            showNotice(
                                data.message || (data.ok ? "Đã cập nhật lịch tự động." : "Không lưu được lịch tự động."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        } catch (_) {
                            showNotice("Không lưu được lịch tự động. Vui lòng thử lại.", "error");
                        }
                    });
                }
                if (scheduleModeSelect) {
                    scheduleModeSelect.addEventListener("change", () => {
                        syncScheduleModeFields();
                        redrawScheduleCalendar();
                    });
                }
                if (weekdaySelect) {
                    weekdaySelect.addEventListener("change", redrawScheduleCalendar);
                }
                if (endDateInput) {
                    endDateInput.addEventListener("change", updateSchedulePreview);
                }

                if (monthDateInput && monthDateBtn) {
                    monthDateBtn.addEventListener("click", () => {
                        try {
                            if (monthPicker && typeof monthPicker.open === "function") {
                                monthPicker.open();
                            } else if (typeof monthDateInput.showPicker === "function") {
                                monthDateInput.showPicker();
                            } else {
                                monthDateInput.focus();
                                monthDateInput.click();
                            }
                        } catch (_) {
                            monthDateInput.focus();
                        }
                    });
                }
                if (endDateInput && endDateBtn) {
                    endDateBtn.addEventListener("click", () => {
                        try {
                            if (endPicker && typeof endPicker.open === "function") {
                                endPicker.open();
                            } else if (typeof endDateInput.showPicker === "function") {
                                endDateInput.showPicker();
                            } else {
                                endDateInput.focus();
                                endDateInput.click();
                            }
                        } catch (_) {
                            endDateInput.focus();
                        }
                    });
                }
                updateSchedulePreview();
                syncScheduleModeFields();
                redrawScheduleCalendar();

                const statusBadge = document.getElementById("status-badge");
                const currentTaskLabel = document.getElementById("current-task");
                const progressBar = document.getElementById("progress-bar");
                const progressText = document.getElementById("progress-text");
                const logSection = document.getElementById("log-section");
                const primaryAction = document.getElementById("primary-action");
                const scheduleLabelEls = Array.from(document.querySelectorAll("[data-schedule-label]"));
                const sidebarStatusText = document.getElementById("sidebar-status-text");
                const sidebarStatusTask = document.getElementById("sidebar-status-task");
                let postsVisibleCount = document.getElementById("posts-visible-count");
                let postsActiveTabLabel = document.getElementById("posts-active-tab-label");
                let postsTabCards = Array.from(document.querySelectorAll("[data-posts-tab-trigger]"));
                let postsTabPanels = Array.from(document.querySelectorAll("[data-posts-tab-panel]"));
                let postsSelectionPlaceholder = document.getElementById("posts-selection-placeholder");
                let postsMasterView = document.getElementById("posts-master-view");
                let postsDetailView = document.getElementById("posts-detail-view");
                let postsBackButton = document.getElementById("posts-back-button");
                let postsMasterSearchField = document.querySelector(".posts-master-search-field");
                let postsMasterCampaignChips = Array.from(document.querySelectorAll("[data-master-campaign]"));
                let postsMasterEmptyPanel = document.querySelector(".posts-master-empty-panel");
                let campaignSheetList = document.getElementById("campaign-sheet-list");
                const sidebarLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
                const dashboardSections = Array.from(document.querySelectorAll("[data-dashboard-section]"));
                let refreshInFlight = false;
                let postsMasterCampaignFilter = "all";
                let postsSheetActionsCloseBound = false;
                let overviewCampaignOpenBound = false;

                const showNotice = (_message = "", _level = "info") => {};
                const syncPostsDomRefs = () => {
                    postsVisibleCount = document.getElementById("posts-visible-count");
                    postsActiveTabLabel = document.getElementById("posts-active-tab-label");
                    postsTabCards = Array.from(document.querySelectorAll("[data-posts-tab-trigger]"));
                    postsTabPanels = Array.from(document.querySelectorAll("[data-posts-tab-panel]"));
                    postsSelectionPlaceholder = document.getElementById("posts-selection-placeholder");
                    postsMasterView = document.getElementById("posts-master-view");
                    postsDetailView = document.getElementById("posts-detail-view");
                    postsBackButton = document.getElementById("posts-back-button");
                    postsMasterSearchField = document.querySelector(".posts-master-search-field");
                    postsMasterCampaignChips = Array.from(document.querySelectorAll("[data-master-campaign]"));
                    postsMasterEmptyPanel = document.querySelector(".posts-master-empty-panel");
                    campaignSheetList = document.getElementById("campaign-sheet-list");
                };
                const closePostsSheetActionMenus = (exceptMenu = null) => {
                    document.querySelectorAll("[data-posts-sheet-action-menu]").forEach((menu) => {
                        const shouldKeepOpen = exceptMenu && menu === exceptMenu;
                        menu.classList.toggle("hidden", !shouldKeepOpen);
                        const toggle = menu.parentElement?.querySelector("[data-posts-sheet-action-toggle]");
                        if (toggle) {
                            toggle.setAttribute("aria-expanded", shouldKeepOpen ? "true" : "false");
                        }
                    });
                };

                const parseEmployeeUsersData = () => {
                    if (!employeeUsersData) return [];
                    try {
                        const parsed = JSON.parse(employeeUsersData.textContent || "[]");
                        return Array.isArray(parsed) ? parsed : [];
                    } catch (_) {
                        return [];
                    }
                };

                const normalizeEmployeeItem = (item) => {
                    const email = String(item?.email || "").trim().toLowerCase();
                    if (!email || !email.includes("@")) return null;
                    const role = String(item?.role || "user").trim().toLowerCase() === "admin" ? "admin" : "user";
                    const lastLoginText = String(item?.last_login_text || "").trim();
                    const statusKey = String(item?.status_key || (lastLoginText && lastLoginText !== "Chưa có" ? "verified" : "pending")).trim() === "verified" ? "verified" : "pending";
                    const loginCount = Math.max(0, Number.parseInt(String(item?.login_count || "0"), 10) || 0);
                    return {
                        email,
                        role,
                        role_label: role === "admin" ? "Admin" : "User",
                        status_key: statusKey,
                        status_label: statusKey === "verified" ? "Đã xác thực" : "Chờ xác thực",
                        last_login_text: lastLoginText || "Chưa có",
                        login_count: loginCount,
                        is_forced_admin: Boolean(item?.is_forced_admin),
                    };
                };

                const dedupeEmployees = (items) => {
                    const map = new Map();
                    (Array.isArray(items) ? items : []).forEach((item) => {
                        const normalized = normalizeEmployeeItem(item);
                        if (!normalized) return;
                        map.set(normalized.email, normalized);
                    });
                    return Array.from(map.values()).sort((a, b) => {
                        const roleCompare = (a.role === "admin" ? 0 : 1) - (b.role === "admin" ? 0 : 1);
                        if (roleCompare !== 0) return roleCompare;
                        return a.email.localeCompare(b.email);
                    });
                };

                const updateEmployeeSummary = (items) => {
                    const rows = Array.isArray(items) ? items : [];
                    const verified = rows.filter((item) => item.status_key === "verified").length;
                    const admins = rows.filter((item) => item.role === "admin").length;
                    const pending = Math.max(0, rows.length - verified);
                    if (employeeTotalCount) employeeTotalCount.textContent = String(rows.length);
                    if (employeeVerifiedCount) employeeVerifiedCount.textContent = String(verified);
                    if (employeeAdminCount) employeeAdminCount.textContent = String(admins);
                    if (employeeChipAll) employeeChipAll.textContent = String(rows.length);
                    if (employeeChipPending) employeeChipPending.textContent = String(pending);
                    if (employeeChipVerified) employeeChipVerified.textContent = String(verified);
                };

                const resetEmployeeEditor = () => {
                    employeeEditingEmail = "";
                    if (employeeEmailInput) employeeEmailInput.value = "";
                    if (employeeRoleInput) employeeRoleInput.value = "user";
                    if (employeeFormTitle) employeeFormTitle.textContent = "Thêm nhanh";
                    if (employeeFormSub) employeeFormSub.textContent = "Nhập email để thêm vào whitelist đăng nhập và chỉnh role ngay tại đây.";
                    if (employeeAddBtn) {
                        employeeAddBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Thêm nhân viên';
                    }
                    if (employeeCancelBtn) {
                        employeeCancelBtn.classList.add("hidden");
                    }
                };

                const startEmployeeEdit = (email) => {
                    const found = employeeUsersState.find((item) => item.email === email);
                    if (!found || found.is_forced_admin) return;
                    employeeEditingEmail = found.email;
                    if (employeeEmailInput) employeeEmailInput.value = found.email;
                    if (employeeRoleInput) employeeRoleInput.value = found.role === "admin" ? "admin" : "user";
                    if (employeeFormTitle) employeeFormTitle.textContent = "Chỉnh sửa nhân viên";
                    if (employeeFormSub) employeeFormSub.textContent = "Sửa email hoặc role trong form này rồi bấm cập nhật.";
                    if (employeeAddBtn) {
                        employeeAddBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> Cập nhật nhân viên';
                    }
                    if (employeeCancelBtn) {
                        employeeCancelBtn.classList.remove("hidden");
                    }
                    employeeEmailInput?.focus();
                };

                const renderEmployeeRows = () => {
                    if (!employeeTableBody) return;
                    const searchValue = String(employeeSearchInput?.value || "").trim().toLowerCase();
                    const roleValue = String(employeeRoleFilter?.value || "all").trim().toLowerCase();
                    const rows = employeeUsersState.filter((item) => {
                        const matchesSearch = !searchValue || item.email.toLowerCase().includes(searchValue);
                        const matchesRole = roleValue === "all" || item.role === roleValue;
                        const matchesStatus = employeeStatusFilter === "all" || item.status_key === employeeStatusFilter;
                        return matchesSearch && matchesRole && matchesStatus;
                    });
                    employeeTableBody.innerHTML = rows.map((item) => {
                        const forcedHint = item.is_forced_admin ? '<div class="employee-meta">Admin cứng</div>' : `<div class="employee-meta">${item.role_label}</div>`;
                        return `
                            <tr>
                                <td>
                                    <div class="employee-row-user">
                                        <span class="employee-avatar">${item.email.charAt(0).toUpperCase()}</span>
                                        <div>
                                            <div class="employee-email">${item.email}</div>
                                            ${forcedHint}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <select class="employee-role-select" data-employee-role="${item.email}" ${item.is_forced_admin ? "disabled" : ""}>
                                        <option value="user" ${item.role === "user" ? "selected" : ""}>User</option>
                                        <option value="admin" ${item.role === "admin" ? "selected" : ""}>Admin</option>
                                    </select>
                                </td>
                                <td><span class="employee-status-badge ${item.status_key === "verified" ? "is-verified" : "is-pending"}">${item.status_label}</span></td>
                                <td>${item.last_login_text || "Chưa có"}</td>
                                <td class="text-right font-black">${item.login_count || 0}</td>
                                <td>
                                    <div class="employee-table-actions">
                                        <button type="button" class="employee-icon-btn" data-employee-edit="${item.email}" title="Sửa nhân viên" ${item.is_forced_admin ? "disabled" : ""}>
                                            <i class="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button type="button" class="employee-icon-btn" data-employee-remove="${item.email}" title="Xóa nhân viên" ${item.is_forced_admin ? "disabled" : ""}>
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `;
                    }).join("");
                    const hasRows = rows.length > 0;
                    if (employeeEmptyPanel) employeeEmptyPanel.classList.toggle("hidden", hasRows);

                    employeeTableBody.querySelectorAll("[data-employee-role]").forEach((select) => {
                        select.addEventListener("change", async () => {
                            const email = select.getAttribute("data-employee-role") || "";
                            employeeUsersState = employeeUsersState.map((item) => (
                                item.email === email ? { ...item, role: select.value === "admin" ? "admin" : "user", role_label: select.value === "admin" ? "Admin" : "User" } : item
                            ));
                            updateEmployeeSummary(employeeUsersState);
                            renderEmployeeRows();
                            await saveEmployeeUsers({
                                success: "Đã cập nhật role nhân viên.",
                                error: "Không cập nhật được role nhân viên.",
                            });
                        });
                    });

                    employeeTableBody.querySelectorAll("[data-employee-remove]").forEach((button) => {
                        button.addEventListener("click", async () => {
                            const email = button.getAttribute("data-employee-remove") || "";
                            employeeUsersState = employeeUsersState.filter((item) => item.email !== email);
                            if (employeeEditingEmail === email) {
                                resetEmployeeEditor();
                            }
                            updateEmployeeSummary(employeeUsersState);
                            renderEmployeeRows();
                            await saveEmployeeUsers({
                                success: "Đã xóa nhân viên.",
                                error: "Không xóa được nhân viên.",
                            });
                        });
                    });

                    employeeTableBody.querySelectorAll("[data-employee-edit]").forEach((button) => {
                        button.addEventListener("click", () => {
                            const email = button.getAttribute("data-employee-edit") || "";
                            startEmployeeEdit(email);
                        });
                    });
                };

                const saveEmployeeUsers = async (messages = {}) => {
                    const successMessage = messages.success || "Đã lưu danh sách nhân viên.";
                    const errorMessage = messages.error || "Không lưu được danh sách nhân viên.";
                    try {
                        const response = await fetch("/admin/save-users", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                            body: JSON.stringify({ users: employeeUsersState.map((item) => ({ email: item.email, role: item.role })) }),
                        });
                        const data = await response.json();
                        if (data.ok && Array.isArray(data.users)) {
                            employeeUsersState = dedupeEmployees(data.users);
                            updateEmployeeSummary(employeeUsersState);
                            renderEmployeeRows();
                        }
                        showNotice(
                            data.message || (data.ok ? successMessage : errorMessage),
                            data.level || (data.ok ? "success" : "error")
                        );
                        return Boolean(data.ok);
                    } catch (_) {
                        showNotice(`${errorMessage} Vui lòng thử lại.`, "error");
                        return false;
                    }
                };

                if (employeeUsersData) {
                    employeeUsersState = dedupeEmployees(parseEmployeeUsersData());
                    updateEmployeeSummary(employeeUsersState);
                    renderEmployeeRows();
                }

                if (employeeStatusChips.length) {
                    employeeStatusChips.forEach((chip) => {
                        chip.addEventListener("click", () => {
                            employeeStatusFilter = chip.getAttribute("data-employee-status") || "all";
                            employeeStatusChips.forEach((item) => item.classList.toggle("is-active", item === chip));
                            renderEmployeeRows();
                        });
                    });
                }

                if (employeeSearchInput) {
                    employeeSearchInput.addEventListener("input", renderEmployeeRows);
                }

                if (employeeRoleFilter) {
                    employeeRoleFilter.addEventListener("change", renderEmployeeRows);
                }

                if (employeeAddBtn) {
                    employeeAddBtn.addEventListener("click", async () => {
                        const email = String(employeeEmailInput?.value || "").trim().toLowerCase();
                        const role = String(employeeRoleInput?.value || "user").trim().toLowerCase() === "admin" ? "admin" : "user";
                        const isEditingEmployee = Boolean(employeeEditingEmail);
                        if (!email || !email.includes("@")) {
                            showNotice("Email nhân viên không hợp lệ.", "error");
                            return;
                        }
                        const duplicate = employeeUsersState.find((item) => item.email === email && item.email !== employeeEditingEmail);
                        if (duplicate) {
                            showNotice("Email này đã có trong danh sách.", "warning");
                            return;
                        }
                        if (employeeEditingEmail) {
                            employeeUsersState = employeeUsersState.map((item) => {
                                if (item.email !== employeeEditingEmail) return item;
                                return {
                                    ...item,
                                    email,
                                    role,
                                    role_label: role === "admin" ? "Admin" : "User",
                                };
                            });
                        } else {
                            const existing = employeeUsersState.find((item) => item.email === email);
                            if (existing) {
                                employeeUsersState = employeeUsersState.map((item) => (
                                    item.email === email ? { ...item, role, role_label: role === "admin" ? "Admin" : "User" } : item
                                ));
                            } else {
                                employeeUsersState = dedupeEmployees([
                                    ...employeeUsersState,
                                    {
                                        email,
                                        role,
                                        role_label: role === "admin" ? "Admin" : "User",
                                        status_key: "pending",
                                        status_label: "Chờ xác thực",
                                        last_login_text: "Chưa có",
                                        login_count: 0,
                                        is_forced_admin: false,
                                    },
                                ]);
                            }
                        }
                        resetEmployeeEditor();
                        updateEmployeeSummary(employeeUsersState);
                        renderEmployeeRows();
                        await saveEmployeeUsers({
                            success: isEditingEmployee ? "Đã cập nhật nhân viên." : "Đã thêm nhân viên.",
                            error: isEditingEmployee ? "Không cập nhật được nhân viên." : "Không thêm được nhân viên.",
                        });
                    });
                }

                if (employeeCancelBtn) {
                    employeeCancelBtn.addEventListener("click", resetEmployeeEditor);
                }

                const applyActiveSheetMeta = (data, syncInputs = false) => {
                    const sheetName = (data?.active_sheet_name || "").trim() || "Chưa cài đặt";
                    const sheetId = (data?.active_sheet_id || "").trim() || "Chưa cài đặt";
                    activeSheetNameEls.forEach((el) => {
                        el.textContent = sheetName;
                    });
                    activeSheetIdEls.forEach((el) => {
                        el.textContent = sheetId;
                    });
                    if (syncInputs && sheetNameInput && typeof data?.active_sheet_name === "string") {
                        sheetNameInput.value = data.active_sheet_name;
                    }
                    if (syncInputs && sheetUrlInput && typeof data?.snapshot_url === "string") {
                        sheetUrlInput.value = data.snapshot_url;
                    }
                };

                const applyColumnConfigState = (data) => {
                    const columnConfig = data?.column_config;
                    if (!columnConfig) return;
                    const manualMode = columnConfig.manual_mode || "AUTO";
                    configModeEls.forEach((el) => {
                        el.textContent = manualMode;
                    });
                    const inputValues = columnConfig.input_values || {};
                    const detectedInputs = columnConfig.detected_inputs || {};
                    const manualInputs = columnConfig.manual_inputs || {};
                    const inputSources = columnConfig.input_sources || {};
                    Object.entries(columnInputEls).forEach(([field, el]) => {
                        if (!el) return;
                        const nextValue = inputValues[field] || "";
                        if (document.activeElement !== el) {
                            el.value = nextValue;
                        }
                        el.dataset.detectedValue = detectedInputs[field] || "";
                        el.dataset.manualValue = manualInputs[field] || "";
                    });
                    Object.entries(columnSourceEls).forEach(([field, el]) => {
                        if (!el) return;
                        el.textContent = inputSources[field] || "CHƯA THẤY";
                    });
                    const startRowField = setColumnsForm?.querySelector("[name='start_row']");
                    if (startRowField && document.activeElement !== startRowField) {
                        startRowField.value = `${columnConfig.start_row || 2}`;
                    }
                    const detectedText = columnConfig.detected_text || "";
                    columnDetectedTextEls.forEach((el) => {
                        el.textContent = detectedText;
                    });
                    // Re-apply active tab's per-tab overrides on top of the global defaults
                    if (colConfigActiveTab) {
                        const tabCfg = serverColConfigByTab[colConfigActiveTab] || tabColConfigCache[colConfigActiveTab];
                        if (tabCfg) writeColConfigInputs(tabCfg);
                    }
                };

                const applySheetMetadataState = (data) => {
                    const sheetMetadata = data?.sheet_metadata;
                    if (!sheetMetadata) return;
                    const canEditMetadata = Boolean(sheetMetadata.can_edit_metadata);
                    const shouldRevealMetadata = pendingSheetMetadataReveal && canEditMetadata;
                    if (sheetMetadataPanel) {
                        sheetMetadataPanel.classList.toggle("hidden", !canEditMetadata);
                    }
                    if (sheetMetadataGate) {
                        sheetMetadataGate.classList.toggle("hidden", canEditMetadata);
                    }
                    if (sheetCampaignNameInput) {
                        if (typeof sheetMetadata.campaign_options_html === "string" && sheetMetadata.campaign_options_html.trim()) {
                            sheetCampaignNameInput.innerHTML = sheetMetadata.campaign_options_html;
                        }
                        sheetCampaignNameInput.disabled = !Boolean(sheetMetadata.campaign_has_options);
                        if (document.activeElement !== sheetCampaignNameInput) {
                            sheetCampaignNameInput.value = sheetMetadata.campaign_label || "";
                        }
                    }
                    if (sheetBrandInput && document.activeElement !== sheetBrandInput) {
                        sheetBrandInput.value = sheetMetadata.brand_label || "";
                    }
                    if (sheetCampaignDescriptionInput && document.activeElement !== sheetCampaignDescriptionInput) {
                        sheetCampaignDescriptionInput.value = sheetMetadata.campaign_description || "";
                    }
                    if (shouldRevealMetadata && sheetMetadataPanel) {
                        setTimeout(() => {
                            sheetMetadataPanel.scrollIntoView({ behavior: "smooth", block: "center" });
                            if (sheetCampaignNameInput && !(sheetCampaignNameInput.value || "").trim()) {
                                sheetCampaignNameInput.focus();
                            }
                        }, 120);
                    }
                    pendingSheetMetadataReveal = false;
                };

                const applyScheduleConfigState = (data) => {
                    const scheduleConfig = data?.schedule_config;
                    if (!scheduleConfig) return;
                    const label = scheduleConfig.label || "Chưa bật";
                    scheduleLabelEls.forEach((el) => {
                        el.textContent = label;
                    });
                    if (scheduleSheetSelect && typeof scheduleConfig.sheet_options_html === "string" && scheduleConfig.sheet_options_html.trim()) {
                        scheduleSheetSelect.innerHTML = scheduleConfig.sheet_options_html;
                        snapshotScheduleSheetOptions();
                        rebuildScheduleSheetSelectOptions(scheduleConfig.sheet_binding_key || scheduleSheetSelect.value || "");
                        const currentFilter = scheduleSheetSearch && document.activeElement === scheduleSheetSearch
                            ? scheduleSheetSearch.value
                            : "";
                        renderScheduleSheetOptions(currentFilter, scheduleConfig.sheet_binding_key || scheduleSheetSelect.value || "");
                    }
                    if (scheduleSheetSelect && typeof scheduleConfig.sheet_binding_key === "string") {
                        if (!scheduleSheetSelect.disabled) {
                            scheduleSheetSelect.value = scheduleConfig.sheet_binding_key;
                        }
                    }
                    if (scheduleSheetSearch && document.activeElement !== scheduleSheetSearch) {
                        const selectedItem = scheduleSheetOptionItems.find((item) => item.value === String(scheduleConfig.sheet_binding_key || scheduleSheetSelect?.value || "").trim());
                        scheduleSheetSearch.value = selectedItem ? selectedItem.label : "";
                    }
                    if (scheduleBoundSheetName) {
                        scheduleBoundSheetName.textContent = scheduleConfig.sheet_name_text || "Chưa chốt tab nào";
                    }
                    if (scheduleBoundSheetId) {
                        scheduleBoundSheetId.textContent = scheduleConfig.sheet_id_text || "Chưa có Spreadsheet ID";
                    }
                    if (scheduleBoundScope) {
                        scheduleBoundScope.textContent = scheduleConfig.scope_text || "";
                    }
                    if (scheduleTargetSummary) {
                        scheduleTargetSummary.textContent = scheduleConfig.target_summary_text || "Lịch hiện đang chạy toàn bộ link trong tab đã chốt.";
                    }
                    if (scheduleBoundLink) {
                        const hasLink = Boolean(scheduleConfig.snapshot_url);
                        scheduleBoundLink.classList.toggle("hidden", !hasLink);
                        scheduleBoundLink.href = hasLink ? scheduleConfig.snapshot_url : "#";
                    }
                };

                const applyScheduleTrackingState = (data) => {
                    const tracking = data?.schedule_tracking;
                    if (!tracking) return;
                    if (scheduleTrackList && typeof tracking.entries_html === "string") {
                        scheduleTrackList.innerHTML = tracking.entries_html;
                    }
                    if (scheduleTrackDetailBody) {
                        scheduleTrackDetailBody.classList.toggle("hidden", !tracking.has_active_entry);
                    }
                    if (scheduleTrackEmptyState) {
                        scheduleTrackEmptyState.classList.toggle("hidden", !!tracking.has_active_entry);
                    }
                    if (scheduleTrackActiveName) {
                        scheduleTrackActiveName.textContent = tracking.active_sheet_name || "Chưa chọn sheet";
                    }
                    if (scheduleTrackCalendarTitle) {
                        scheduleTrackCalendarTitle.textContent = tracking.calendar_title || "Chưa có lịch";
                    }
                    if (scheduleTrackCalendarSubtext) {
                        scheduleTrackCalendarSubtext.textContent = tracking.calendar_subtext || "";
                    }
                    if (scheduleTrackCalendar && typeof tracking.calendar_html === "string") {
                        scheduleTrackCalendar.innerHTML = tracking.calendar_html;
                    }
                    if (scheduleTrackNext) {
                        scheduleTrackNext.textContent = tracking.next_run_text || "Chưa có";
                    }
                    if (scheduleTrackStarted) {
                        scheduleTrackStarted.textContent = tracking.last_started_text || "Chưa có";
                    }
                    if (scheduleTrackFinished) {
                        scheduleTrackFinished.textContent = tracking.last_finished_text || "Chưa có";
                    }
                    if (scheduleTrackDuration) {
                        scheduleTrackDuration.textContent = tracking.last_duration_text || "0s";
                    }
                    if (scheduleTrackRunning) {
                        scheduleTrackRunning.textContent = tracking.is_running_text || "Đang chờ";
                    }
                    if (scheduleTrackStatus) {
                        scheduleTrackStatus.textContent = tracking.last_status_text || "Chưa chạy";
                    }
                    if (scheduleTrackSource) {
                        scheduleTrackSource.textContent = tracking.last_source_text || "Chưa có";
                    }
                    if (scheduleTrackSheet) {
                        scheduleTrackSheet.textContent = tracking.last_sheet_text || "Chưa có";
                    }
                    if (scheduleTrackProcessed) {
                        scheduleTrackProcessed.textContent = tracking.last_processed_text || "0";
                    }
                    if (scheduleTrackSuccess) {
                        scheduleTrackSuccess.textContent = tracking.last_success_text || "0";
                    }
                    if (scheduleTrackFailed) {
                        scheduleTrackFailed.textContent = tracking.last_failed_text || "0";
                    }
                    if (scheduleTrackHistory && typeof tracking.history_html === "string") {
                        scheduleTrackHistory.innerHTML = tracking.history_html;
                    }
                };

                const createOverviewDate = (value) => {
                    const raw = String(value || "").trim();
                    if (!raw) return null;
                    const parsed = new Date(`${raw}T00:00:00`);
                    return Number.isNaN(parsed.getTime()) ? null : parsed;
                };

                const startOfOverviewWeek = (sourceDate) => {
                    const nextDate = new Date(sourceDate.getTime());
                    const weekday = (nextDate.getDay() + 6) % 7;
                    nextDate.setDate(nextDate.getDate() - weekday);
                    nextDate.setHours(0, 0, 0, 0);
                    return nextDate;
                };

                const formatOverviewShortDate = (sourceDate) => {
                    const dd = `${sourceDate.getDate()}`.padStart(2, "0");
                    const mm = `${sourceDate.getMonth() + 1}`.padStart(2, "0");
                    return `${dd}/${mm}`;
                };

                const formatOverviewLongDate = (sourceDate) => {
                    const dd = `${sourceDate.getDate()}`.padStart(2, "0");
                    const mm = `${sourceDate.getMonth() + 1}`.padStart(2, "0");
                    const yyyy = sourceDate.getFullYear();
                    return `${dd}/${mm}/${yyyy}`;
                };

                const formatOverviewMonth = (sourceDate) => `T${sourceDate.getMonth() + 1}/${sourceDate.getFullYear()}`;

                const formatOverviewAxisLabel = (sourceDate, granularity) => {
                    if (granularity === "month") return formatOverviewMonth(sourceDate);
                    if (granularity === "week") return `Từ ${formatOverviewShortDate(sourceDate)}`;
                    return formatOverviewShortDate(sourceDate);
                };

                const formatOverviewTitleLabel = (sourceDate, granularity) => {
                    if (granularity === "month") {
                        return `Tháng ${sourceDate.getMonth() + 1}/${sourceDate.getFullYear()}`;
                    }
                    if (granularity === "week") {
                        return `Tuần bắt đầu ${formatOverviewLongDate(sourceDate)}`;
                    }
                    return formatOverviewLongDate(sourceDate);
                };

                const aggregateOverviewChartEntries = (rawEntries, rangeKey, granularity) => {
                    const normalized = (Array.isArray(rawEntries) ? rawEntries : [])
                        .map((item) => {
                            const parsedDate = createOverviewDate(item?.date);
                            if (!parsedDate) return null;
                            return {
                                date: parsedDate,
                                creator: String(item?.creator || "").trim().toLowerCase(),
                                view: Number(item?.view || 0) || 0,
                                engagement: Number(item?.engagement || 0) || 0,
                            };
                        })
                        .filter(Boolean)
                        .sort((a, b) => a.date - b.date);
                    if (!normalized.length) return [];

                    let filtered = normalized;
                    const latestDate = normalized[normalized.length - 1].date;
                    if (rangeKey === "7d" || rangeKey === "30d") {
                        const daysBack = rangeKey === "7d" ? 6 : 29;
                        const cutoff = new Date(latestDate.getTime());
                        cutoff.setDate(cutoff.getDate() - daysBack);
                        cutoff.setHours(0, 0, 0, 0);
                        filtered = normalized.filter((item) => item.date >= cutoff);
                    }

                    const bucketMap = new Map();
                    filtered.forEach((item) => {
                        let bucketDate;
                        if (granularity === "month") {
                            bucketDate = new Date(item.date.getFullYear(), item.date.getMonth(), 1);
                        } else if (granularity === "week") {
                            bucketDate = startOfOverviewWeek(item.date);
                        } else {
                            bucketDate = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate());
                        }
                        const key = bucketDate.toISOString().slice(0, 10);
                        if (!bucketMap.has(key)) {
                            bucketMap.set(key, {
                                key,
                                date: bucketDate,
                                posts: 0,
                                creators: new Set(),
                                views: 0,
                                engagement: 0,
                            });
                        }
                        const bucket = bucketMap.get(key);
                        bucket.posts += 1;
                        if (item.creator) bucket.creators.add(item.creator);
                        bucket.views += item.view;
                        bucket.engagement += item.engagement;
                    });

                    return Array.from(bucketMap.values())
                        .sort((a, b) => a.date - b.date)
                        .map((bucket) => ({
                            key: bucket.key,
                            date: bucket.date,
                            label: formatOverviewAxisLabel(bucket.date, granularity),
                            title: formatOverviewTitleLabel(bucket.date, granularity),
                            posts: bucket.posts,
                            creators: bucket.creators.size,
                            views: bucket.views,
                            engagement: bucket.engagement,
                        }));
                };

                const aggregateBrandsForChart = (rawEntries) => {
                    const normalized = (Array.isArray(rawEntries) ? rawEntries : [])
                        .map((item) => {
                            const parsedDate = createOverviewDate(item?.date);
                            if (!parsedDate) return null;
                            return {
                                date: parsedDate,
                                brand: String(item?.brand || "Chưa gắn").trim(),
                                views: Number(item?.view || 0) || 0,
                                posts: 1,
                                engagement: Number(item?.engagement || 0) || 0,
                            };
                        })
                        .filter(Boolean);
                    
                    if (!normalized.length) return [];

                    const brandMap = new Map();
                    let totalViews = 0;
                    normalized.forEach((item) => {
                        if (!brandMap.has(item.brand)) {
                            brandMap.set(item.brand, {
                                name: item.brand,
                                views: 0,
                                posts: 0,
                                engagement: 0
                            });
                        }
                        const b = brandMap.get(item.brand);
                        b.views += item.views;
                        b.posts += 1;
                        b.engagement += item.engagement;
                        totalViews += item.views;
                    });

                    return Array.from(brandMap.values())
                        .map(b => ({
                            ...b,
                            ratio: totalViews > 0 ? Math.round((b.views / totalViews) * 100 * 10) / 10 : 0
                        }))
                        .sort((a, b) => b.posts - a.posts);
                };

                const createSvgNode = (name, attrs = {}) => {
                    const node = document.createElementNS("http://www.w3.org/2000/svg", name);
                    Object.entries(attrs).forEach(([key, value]) => {
                        node.setAttribute(key, String(value));
                    });
                    return node;
                };

                const buildSmoothLinePath = (points) => {
                    if (!Array.isArray(points) || !points.length) return "";
                    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
                    let path = `M ${points[0].x} ${points[0].y}`;
                    for (let index = 0; index < points.length - 1; index += 1) {
                        const p0 = points[Math.max(0, index - 1)];
                        const p1 = points[index];
                        const p2 = points[index + 1];
                        const p3 = points[Math.min(points.length - 1, index + 2)];
                        const cp1x = p1.x + (p2.x - p0.x) / 6;
                        const cp1y = p1.y + (p2.y - p0.y) / 6;
                        const cp2x = p2.x - (p3.x - p1.x) / 6;
                        const cp2y = p2.y - (p3.y - p1.y) / 6;
                        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
                    }
                    return path;
                };

                const buildSmoothAreaPath = (points, baseY) => {
                    if (!Array.isArray(points) || !points.length) return "";
                    const linePath = buildSmoothLinePath(points);
                    return `${linePath} L ${points[points.length - 1].x} ${baseY} L ${points[0].x} ${baseY} Z`;
                };

                const initializeOverviewCharts = () => {
                    document.querySelectorAll("[data-overview-chart-card]").forEach((card) => {
                        const dataScript = card.querySelector("[data-overview-chart-data]");
                        const svg = card.querySelector("[data-overview-chart-svg]");
                        const singleState = card.querySelector("[data-overview-chart-single]");
                        const emptyState = card.querySelector("[data-overview-chart-empty]");
                        const tooltip = card.querySelector("[data-overview-chart-tooltip]");
                        const periodLabel = card.querySelector("[data-overview-chart-period]");
                        if (!dataScript || !svg || !singleState || !emptyState || !tooltip || !periodLabel) return;

                        let payload = { entries: [] };
                        try {
                            payload = JSON.parse(dataScript.textContent || "{}");
                        } catch (_) {
                            payload = { entries: [] };
                        }
                        const rawEntries = Array.isArray(payload.entries) ? payload.entries : [];
                        if (!card._overviewChartState) {
                            card._overviewChartState = { range: "7d", granularity: "day" };
                        }

                        const renderChart = () => {
                            try {
                                const brands = (Array.isArray(payload.brands) && payload.brands.length > 0) 
                                    ? payload.brands.sort((a, b) => b.posts - a.posts)
                                    : aggregateBrandsForChart(rawEntries);

                                tooltip.classList.add("hidden");
                                svg.replaceChildren();
                                singleState.classList.add("hidden");
                                singleState.innerHTML = "";
                                svg.classList.remove("hidden");

                                if (!brands.length) {
                                    emptyState.classList.remove("hidden");
                                    periodLabel.textContent = "Chưa có dữ liệu thương hiệu";
                                    return;
                                }

                                emptyState.classList.add("hidden");
                                
                                const formatMetric = (v) => {
                                    if (v >= 1000000) return (v / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
                                    if (v >= 1000) return (v / 1000).toFixed(1).replace(/\.0$/, "") + "K";
                                    return String(v);
                                };

                                const totalPosts = brands.reduce((sum, b) => sum + (b.posts || 0), 0);
                                const totalViews = brands.reduce((sum, b) => sum + (b.views || 0), 0);
                                const fPosts = new Intl.NumberFormat("vi-VN").format(totalPosts);
                                periodLabel.textContent = "Tổng cộng " + fPosts + " bài đăng, " + formatMetric(totalViews) + " views";

                                const width = 960;
                                const height = 320;
                                svg.setAttribute("viewBox", "0 0 960 320");
                                svg.removeAttribute("preserveAspectRatio");

                                const padding = { top: 44, right: 62, bottom: 48, left: 62 };
                                const innerWidth = width - padding.left - padding.right;
                                const innerHeight = height - padding.top - padding.bottom;
                                
                                const maxPosts = Math.max(1, ...brands.map(b => b.posts || 0));
                                const maxViews = Math.max(1, ...brands.map(b => b.views || 0));
                                const tickCount = 4;
                                
                                const colWidth = innerWidth / Math.max(1, brands.length);
                                const barW = Math.min(40, colWidth * 0.6);
                                const xAt = (index) => {
                                    if (brands.length === 1) return padding.left + innerWidth / 2;
                                    return padding.left + (colWidth * index) + (colWidth / 2);
                                };
                                const yPosts = (val) => padding.top + innerHeight - ((val || 0) / maxPosts * innerHeight);
                                const yViews = (val) => padding.top + innerHeight - ((val || 0) / maxViews * innerHeight);

                                const chartUid = card.dataset.overviewChartUid || ("overview-" + Math.random().toString(36).slice(2, 10));
                                card.dataset.overviewChartUid = chartUid;

                                const defs = createSvgNode("defs");
                                const barGrad = createSvgNode("linearGradient", { id: "bar-grad-" + chartUid, x1:0, y1:0, x2:0, y2:1 });
                                barGrad.appendChild(createSvgNode("stop", { offset: "0%", "stop-color": "#10b981", "stop-opacity": "1" }));
                                barGrad.appendChild(createSvgNode("stop", { offset: "100%", "stop-color": "#059669", "stop-opacity": "0.85" }));
                                defs.appendChild(barGrad);
                                
                                const greyGrad = createSvgNode("linearGradient", { id: "grey-grad-" + chartUid, x1:0, y1:0, x2:0, y2:1 });
                                greyGrad.appendChild(createSvgNode("stop", { offset: "0%", "stop-color": "rgba(148, 163, 184, 0.35)", "stop-opacity": "1" }));
                                greyGrad.appendChild(createSvgNode("stop", { offset: "100%", "stop-color": "rgba(148, 163, 184, 0.15)", "stop-opacity": "1" }));
                                defs.appendChild(greyGrad);

                                const blueGrad = createSvgNode("linearGradient", { id: "line-grad-" + chartUid, x1:0, y1:0, x2:0, y2:1 });
                                blueGrad.appendChild(createSvgNode("stop", { offset: "0%", "stop-color": "#38bdf8", "stop-opacity": "0.3" }));
                                blueGrad.appendChild(createSvgNode("stop", { offset: "100%", "stop-color": "#38bdf8", "stop-opacity": "0" }));
                                defs.appendChild(blueGrad);
                                svg.appendChild(defs);

                                const bgRect = createSvgNode("rect", {
                                    x: padding.left, y: padding.top, width: innerWidth, height: innerHeight,
                                    rx: 24, fill: "rgba(15, 23, 42, 0.4)", stroke: "rgba(148, 163, 184, 0.1)", "stroke-width": 1
                                });
                                svg.appendChild(bgRect);

                                for (let i = 0; i <= tickCount; i++) {
                                    const y = padding.top + (innerHeight * i) / tickCount;
                                    const postVal = Math.round(maxPosts * (tickCount - i) / tickCount);
                                    const viewVal = Math.round(maxViews * (tickCount - i) / tickCount);
                                    
                                    svg.appendChild(createSvgNode("line", {
                                        x1: padding.left, y1: y, x2: width - padding.right, y2: y,
                                        stroke: "rgba(148, 163, 184, 0.1)", "stroke-width": 1, "stroke-dasharray": "4 8"
                                    }));
                                    
                                    const lblLeft = createSvgNode("text", {
                                        x: padding.left - 12, y: y + 4, fill: "rgba(16, 185, 129, 0.6)",
                                        "font-size": 11, "font-weight": 700, "text-anchor": "end"
                                    });
                                    lblLeft.textContent = postVal;
                                    svg.appendChild(lblLeft);

                                    const lblRight = createSvgNode("text", {
                                        x: width - padding.right + 12, y: y + 4, fill: "rgba(56, 189, 248, 0.6)",
                                        "font-size": 11, "font-weight": 700, "text-anchor": "start"
                                    });
                                    lblRight.textContent = formatMetric(viewVal);
                                    svg.appendChild(lblRight);
                                }

                                brands.forEach((b, i) => {
                                    const x = xAt(i);
                                    const y = yPosts(b.posts);
                                    const h = Math.max(4, innerHeight - (y - padding.top));
                                    
                                    const bar = createSvgNode("rect", {
                                        x: x - barW / 2, y, width: barW, height: h + 20, 
                                        rx: 6, fill: "url(#bar-grad-" + chartUid + ")",
                                        style: "transition: all 0.3s ease; clip-path: inset(0 0 20px 0);"
                                    });
                                    bar.addEventListener("mouseenter", (e) => showTooltip(e, b));
                                    bar.addEventListener("mouseleave", hideTooltip);
                                    svg.appendChild(bar);
                                    
                                    const valTxt = createSvgNode("text", {
                                        x, y: y - 10, fill: (i === 0 ? "#10b981" : "#94a3b8"),
                                        "font-size": 12, "font-weight": 800, "text-anchor": "middle"
                                    });
                                    valTxt.textContent = (b.posts || 0) + " bài";
                                    svg.appendChild(valTxt);
                                    
                                    const nameTxt = createSvgNode("text", {
                                        x, y: height - 14, fill: "rgba(148, 163, 184, 0.8)",
                                        "font-size": 11, "font-weight": 700, "text-anchor": "middle"
                                    });
                                    const bName = b.name || "N/A";
                                    nameTxt.textContent = bName.length > 14 ? bName.slice(0, 12) + ".." : bName;
                                    svg.appendChild(nameTxt);
                                });

                                const linePoints = brands.map((b, i) => ({ x: xAt(i), y: yViews(b.views || 0) }));
                                const pathD = buildSmoothLinePath(linePoints);
                                const linePath = createSvgNode("path", {
                                    d: pathD, fill: "none", stroke: "#38bdf8", "stroke-width": 3.5,
                                    "stroke-linecap": "round", "stroke-linejoin": "round"
                                });
                                svg.appendChild(linePath);
                                
                                linePoints.forEach((p, i) => {
                                    const b = brands[i];
                                    const halo = createSvgNode("circle", { cx: p.x, cy: p.y, r: 8, fill: "#38bdf8", "fill-opacity": 0.1 });
                                    svg.appendChild(halo);
                                    
                                    const point = createSvgNode("circle", {
                                        cx: p.x, cy: p.y, r: 4.5, fill: "#0f172a", stroke: "#38bdf8", "stroke-width": 2.5
                                    });
                                    point.addEventListener("mouseenter", (e) => showTooltip(e, b));
                                    point.addEventListener("mouseleave", hideTooltip);
                                    svg.appendChild(point);
                                });
                            } catch (error) {
                                emptyState.classList.add("hidden");
                                svg.classList.add("hidden");
                                singleState.innerHTML = "<div style="color:#ef4444; padding:1rem; font-family:monospace; background:rgba(0,0,0,0.5); border-radius:8px; width:100%;">" + String(error.message) + "</div>";
                                singleState.classList.remove("hidden");
                            }
                        };

                                                if (!card._overviewChartBound) {
                            card.querySelectorAll("[data-overview-range]").forEach((button) => {
                                button.addEventListener("click", () => {
                                    card._overviewChartState.range = button.dataset.overviewRange || "7d";
                                    renderChart();
                                });
                            });
                            card.querySelectorAll("[data-overview-granularity]").forEach((button) => {
                                button.addEventListener("click", () => {
                                    card._overviewChartState.granularity = button.dataset.overviewGranularity || "day";
                                    renderChart();
                                });
                            });

                            const chartFrame = card.querySelector(".overview-chart-frame") || card;
                            if (window.ResizeObserver && !card._overviewChartResizeObserver) {
                                card._overviewChartResizeObserver = new ResizeObserver(() => {
                                    if (card._overviewChartResizeTimeout) clearTimeout(card._overviewChartResizeTimeout);
                                    card._overviewChartResizeTimeout = setTimeout(() => {
                                        if (svg.clientWidth) renderChart();
                                    }, 50);
                                });
                                card._overviewChartResizeObserver.observe(chartFrame);
                            }

                            card._overviewChartBound = true;
                        }

                        renderChart();
                    });
                };

                const applyStatusState = (data) => {
                    if (!data) return;
                    if (statusBadge) {
                        statusBadge.className = data.status_badge_class;
                        statusBadge.textContent = data.status_badge_text;
                    }
                    if (sidebarStatusText) {
                        sidebarStatusText.textContent = data.status_badge_text;
                    }
                    if (sidebarStatusTask) {
                        sidebarStatusTask.textContent = data.current_task;
                    }
                    if (currentTaskLabel) {
                        currentTaskLabel.textContent = data.current_task;
                    }
                    if (progressBar) {
                        progressBar.style.width = data.progress_width;
                    }
                    if (progressText) {
                        progressText.textContent = data.progress_text || "";
                    }
                    if (logSection && typeof data.log_html === "string") {
                        logSection.innerHTML = data.log_html;
                    }
                    if (primaryAction && typeof data.primary_action_html === "string") {
                        primaryAction.innerHTML = data.primary_action_html;
                    }
                    applyConfigLockState(Boolean(data.config_locked), data.config_lock_message || "");
                    // Merge server-saved per-tab column overrides into our local reference dict
                    if (data.column_overrides_by_tab && typeof data.column_overrides_by_tab === "object") {
                        const hadConfig = colConfigActiveTab && !!serverColConfigByTab[colConfigActiveTab];
                        Object.assign(serverColConfigByTab, data.column_overrides_by_tab);
                        // If there's an active tab and we just received its config for the first time, load it
                        if (colConfigActiveTab && !hadConfig && serverColConfigByTab[colConfigActiveTab]) {
                            writeColConfigInputs(serverColConfigByTab[colConfigActiveTab]);
                        }
                    }
                    applyTabProgressState(data);
                };

                const tabProgressSection = document.getElementById("tab-progress-section");
                const applyTabProgressState = (data) => {
                    if (!tabProgressSection) return;
                    const tp = data?.tab_progress;
                    if (!tp || typeof tp !== "object" || !Object.keys(tp).length) {
                        tabProgressSection.classList.add("hidden");
                        tabProgressSection.innerHTML = "";
                        return;
                    }
                    tabProgressSection.classList.remove("hidden");
                    tabProgressSection.innerHTML = Object.entries(tp).map(([tabName, info]) => {
                        const cur = info.current || 0;
                        const tot = info.total || 0;
                        const status = info.status || "scanning";
                        const pct = tot > 0 ? Math.round((cur / tot) * 100) : (status === "completed" ? 100 : 0);
                        const isCompleted = status === "completed";
                        const isStopped = status === "stopped";
                        const barColor = isCompleted ? "bg-emerald-500" : isStopped ? "bg-amber-400" : "bg-sky-500";
                        const badgeColor = isCompleted
                            ? "background:rgba(16,185,129,0.15);color:#6ee7b7;border-color:rgba(52,211,153,0.25);"
                            : isStopped
                            ? "background:rgba(251,191,36,0.13);color:#fcd34d;border-color:rgba(253,230,138,0.25);"
                            : "background:rgba(14,165,233,0.13);color:#7dd3fc;border-color:rgba(125,211,252,0.22);";
                        const badgeLabel = isCompleted ? "HOÀN TẤT" : isStopped ? "ĐÃ DỪNG" : "ĐANG QUÉT";
                        return `<div style="background:rgba(15,23,42,0.55);border:1px solid rgba(148,163,184,0.12);border-radius:12px;padding:10px 12px;">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                                <span style="font-size:12px;font-weight:800;color:#e2e8f0;">${tabName}</span>
                                <span style="font-size:10px;font-weight:800;letter-spacing:.08em;padding:2px 8px;border-radius:999px;border:1px solid;${badgeColor}">${badgeLabel}</span>
                            </div>
                            <div style="display:flex;align-items:center;gap:8px;">
                                <div style="flex:1;background:rgba(30,41,59,0.8);border-radius:999px;height:6px;overflow:hidden;">
                                    <div class="${barColor}" style="height:100%;border-radius:999px;width:${pct}%;transition:width .8s ease;"></div>
                                </div>
                                <span style="font-size:11px;font-weight:700;color:#94a3b8;min-width:36px;text-align:right;">${pct}%</span>
                            </div>
                            <div style="font-size:10px;color:#64748b;margin-top:4px;">${cur}/${tot} bài</div>
                        </div>`;
                    }).join("");
                };

                applyConfigLockState(
                    (statusBadge?.textContent || "").trim() === "Đã dừng" && (currentTaskLabel?.textContent || "").trim() === "Đã dừng thủ công",
                    "Đang ở trạng thái Đã dừng. Bấm Bắt đầu để mở lại rồi hãy nhập hoặc lưu sheet."
                );

                const refreshDashboard = async () => {
                    if (document.hidden || refreshInFlight) return;
                    refreshInFlight = true;
                    try {
                        const response = await fetch("/status", {
                            headers: { "X-Requested-With": "fetch" },
                            cache: "no-store",
                        });
                        if (!response.ok) return;
                        const data = await response.json();
                        applyStatusState(data);
                        applyTabProgressState(data);
                        applyActiveSheetMeta(data);
                        applyColumnConfigState(data);
                        applyScheduleConfigState(data);
                        applyScheduleTrackingState(data);
                    } catch (_) {
                    } finally {
                        refreshInFlight = false;
                    }
                };

                const getVisibleRowChecks = (panel) => Array.from(panel.querySelectorAll(".post-row"))
                    .filter((row) => !row.classList.contains("hidden"))
                    .map((row) => row.querySelector("[data-post-select]"))
                    .filter(Boolean);

                const updatePanelSelectAllState = (panel) => {
                    if (!panel) return;
                    const selectAll = panel.querySelector("[data-select-all-posts]");
                    const selectionCountEl = panel.querySelector("[data-posts-selection-count]");
                    const allRowChecks = Array.from(panel.querySelectorAll("[data-post-select]"));
                    const checkedCount = allRowChecks.filter((item) => item.checked).length;
                    if (selectionCountEl) {
                        selectionCountEl.textContent = `${checkedCount} bài đã chọn`;
                    }
                    if (!selectAll) return;
                    const rowChecks = getVisibleRowChecks(panel);
                    const visibleCheckedCount = rowChecks.filter((item) => item.checked).length;
                    selectAll.checked = rowChecks.length > 0 && visibleCheckedCount === rowChecks.length;
                    selectAll.indeterminate = visibleCheckedCount > 0 && visibleCheckedCount < rowChecks.length;
                };

                const syncPostsSelectionState = () => {
                    postsTabPanels.forEach((panel) => updatePanelSelectAllState(panel));
                };

                const getActivePostsPanel = () => postsTabPanels.find((panel) => panel.classList.contains("is-active")) || null;

                const collectScheduleTargetsFromPanel = (panel) => {
                    if (!panel) return [];
                    return Array.from(panel.querySelectorAll("[data-post-select]:checked"))
                        .map((checkbox) => ({
                            sheet_id: checkbox.dataset.sheetId || "",
                            sheet_gid: checkbox.dataset.sheetGid || "0",
                            sheet_name: checkbox.dataset.sheetName || "",
                            row_idx: checkbox.dataset.rowIdx || "",
                            link: checkbox.dataset.link || "",
                            title: checkbox.dataset.title || "",
                            platform: checkbox.dataset.platformName || "",
                            campaign: checkbox.dataset.campaignName || "",
                        }))
                        .filter((item) => item.sheet_id && item.sheet_name && item.row_idx);
                };

                const submitScheduleTargets = async (targets = [], panel = null) => {
                    const fallbackCheckbox = (panel || getActivePostsPanel())?.querySelector("[data-post-select]");
                    const fallbackSheetId = fallbackCheckbox?.dataset.sheetId || "";
                    const fallbackSheetGid = fallbackCheckbox?.dataset.sheetGid || "0";
                    try {
                        const response = await fetch("/set-schedule-targets", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "X-Requested-With": "fetch",
                            },
                            body: JSON.stringify({
                                targets,
                                sheet_id: fallbackSheetId,
                                sheet_gid: fallbackSheetGid,
                            }),
                        });
                        const data = await response.json();
                        applyScheduleConfigState(data);
                        showNotice(
                            data.message || (data.ok ? "Đã cập nhật danh sách bài cho lịch." : "Không cập nhật được danh sách bài cho lịch."),
                            data.level || (data.ok ? "success" : "error")
                        );
                        return data;
                    } catch (_) {
                        showNotice("Không cập nhật được danh sách bài cho lịch. Vui lòng thử lại.", "error");
                        return null;
                    }
                };

                const rerunSelectedPosts = async (targets = [], panel = null) => {
                    const fallbackCheckbox = (panel || getActivePostsPanel())?.querySelector("[data-post-select]");
                    const fallbackSheetId = fallbackCheckbox?.dataset.sheetId || "";
                    if (!targets.length) {
                        setPostsRerunFeedback("Bạn chưa chọn bài nào để chạy lại.", "warning", panel);
                        showNotice("Bạn chưa chọn bài nào để chạy lại.", "warning");
                        return null;
                    }
                    setPostsRerunFeedback("Đang gửi lệnh chạy lại các bài đã chọn...", "info", panel);
                    try {
                        const response = await fetch("/start-selected", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "X-Requested-With": "fetch",
                            },
                            body: JSON.stringify({
                                targets,
                                sheet_id: fallbackSheetId,
                            }),
                        });
                        const data = await response.json();
                        applyStatusState(data);
                        applyActiveSheetMeta(data);
                        applyColumnConfigState(data);
                        setPostsRerunFeedback(
                            data.message || (data.ok ? "Đã bắt đầu quét lại các bài đã chọn." : "Không chạy lại được các bài đã chọn."),
                            data.level || (data.ok ? "success" : "error"),
                            panel
                        );
                        showNotice(
                            data.message || (data.ok ? "Đã bắt đầu quét lại các bài đã chọn." : "Không chạy lại được các bài đã chọn."),
                            data.level || (data.ok ? "success" : "error")
                        );
                        return data;
                    } catch (_) {
                        setPostsRerunFeedback("Không chạy lại được các bài đã chọn. Vui lòng thử lại.", "error", panel);
                        showNotice("Không chạy lại được các bài đã chọn. Vui lòng thử lại.", "error");
                        return null;
                    }
                };

                const applyPostFilters = (panel = getActivePostsPanel()) => {
                    if (!panel) {
                        if (postsVisibleCount) {
                            postsVisibleCount.textContent = "0 bài";
                        }
                        if (postsActiveTabLabel) {
                            postsActiveTabLabel.textContent = "Chưa chọn";
                        }
                        return;
                    }
                    const searchInput = panel.querySelector(".posts-search-field");
                    const emptyState = panel.querySelector(".posts-empty-panel");
                    const term = (searchInput?.value || "").trim().toLowerCase();
                    const activePlatform = panel.dataset.postsPlatform || "all";
                    const rows = Array.from(panel.querySelectorAll(".post-row"));
                    let visible = 0;

                    rows.forEach((row) => {
                        const platform = row.dataset.platform || "khac";
                        const haystack = row.dataset.search || "";
                        const matchesPlatform = activePlatform === "all" || platform === activePlatform;
                        const matchesTerm = !term || haystack.includes(term);
                        const shouldShow = matchesPlatform && matchesTerm;
                        row.classList.toggle("hidden", !shouldShow);
                        if (shouldShow) {
                            visible += 1;
                        }
                    });

                    if (emptyState) {
                        emptyState.classList.toggle("hidden", visible !== 0);
                    }
                    if (postsVisibleCount) {
                        postsVisibleCount.textContent = `${visible} bài`;
                    }
                    if (postsActiveTabLabel) {
                        postsActiveTabLabel.textContent = panel.dataset.postsTabTitle || "Chưa chọn";
                    }
                    updatePanelSelectAllState(panel);
                };

                const applyPostsMasterFilters = () => {
                    const term = (postsMasterSearchField?.value || "").trim().toLowerCase();
                    const activeCampaign = postsMasterCampaignFilter || "all";
                    let visibleCards = 0;
                    postsTabCards.forEach((card) => {
                        const cardCampaign = card.dataset.postsMasterCampaign || "khong-gan";
                        const haystack = card.dataset.postsMasterSearch || "";
                        const matchesCampaign = activeCampaign === "all" || cardCampaign === activeCampaign;
                        const matchesTerm = !term || haystack.includes(term);
                        const shouldShow = matchesCampaign && matchesTerm;
                        card.classList.toggle("hidden", !shouldShow);
                        if (shouldShow) {
                            visibleCards += 1;
                        }
                    });
                    if (postsMasterEmptyPanel) {
                        postsMasterEmptyPanel.classList.toggle("hidden", visibleCards !== 0);
                    }
                };

                const setPostsMasterCampaignFilter = (campaignSlug = "all") => {
                    const normalizedSlug = String(campaignSlug || "all").trim() || "all";
                    const hasMatch = postsMasterCampaignChips.some((chip) => (chip.dataset.masterCampaign || "all") === normalizedSlug);
                    postsMasterCampaignFilter = hasMatch ? normalizedSlug : "all";
                    postsMasterCampaignChips.forEach((chip) => {
                        chip.classList.toggle("is-active", (chip.dataset.masterCampaign || "all") === postsMasterCampaignFilter);
                    });
                    applyPostsMasterFilters();
                };

                const openCampaignSheetsInPosts = (campaignSlug = "all") => {
                    closePostsSheetActionMenus();
                    setActivePanel("bai-dang", { historyMode: "push" });
                    setActivePostsTab("");
                    if (postsMasterSearchField) {
                        postsMasterSearchField.value = "";
                    }
                    setPostsMasterCampaignFilter(campaignSlug || "all");
                    const postsPanel = document.getElementById("bai-dang");
                    if (postsPanel && typeof postsPanel.scrollIntoView === "function") {
                        postsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                };

                const editMetaForm = document.getElementById("edit-metadata-form");
                if (editMetaForm) {
                    editMetaForm.addEventListener("submit", async (e) => {
                        e.preventDefault();
                        const formData = new FormData(editMetaForm);
                        const p = Object.fromEntries(formData.entries());
                        const modal = document.getElementById("edit-metadata-modal");
                        
                        try {
                            const res = await fetch("/api/update-sheet-metadata", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(p)
                            });
                            const data = await res.json();
                            if (data?.ok) {
                                if (modal) {
                                    modal.classList.add("hidden");
                                    modal.classList.remove("flex");
                                }
                                showNotice(data.message || "Cập nhật thành công", "success");
                                if (data.html) {
                                    const appContainer = document.getElementById("app-container");
                                    if (appContainer) appContainer.innerHTML = data.html;
                                    syncPostsDomRefs();
                                    initializeOverviewCharts();
                                }
                            } else {
                                showNotice(data?.message || "Lỗi cập nhật", "error");
                            }
                        } catch (err) {
                            showNotice("Lỗi kết nối server", "error");
                        }
                    });
                }

                const setActivePostsTab = (tabSlug) => {
                    const safeSlug = postsTabCards.some((card) => card.dataset.postsTabTrigger === tabSlug)
                        ? tabSlug
                        : "";
                    if (postsMasterView) {
                        postsMasterView.classList.toggle("hidden", !!safeSlug);
                    }
                    if (postsDetailView) {
                        postsDetailView.classList.toggle("hidden", !safeSlug);
                    }
                    postsTabCards.forEach((card) => {
                        card.classList.toggle("is-active", !!safeSlug && card.dataset.postsTabTrigger === safeSlug);
                    });
                    postsTabPanels.forEach((panel) => {
                        panel.classList.toggle("is-active", !!safeSlug && panel.dataset.postsTabPanel === safeSlug);
                    });
                    if (postsSelectionPlaceholder) {
                        postsSelectionPlaceholder.classList.toggle("hidden", !!safeSlug);
                    }
                    applyPostFilters(safeSlug ? getActivePostsPanel() : null);
                };

                const initializePostsPanel = () => {
                    if (!postsSheetActionsCloseBound) {
                        document.addEventListener("click", () => closePostsSheetActionMenus());
                        postsSheetActionsCloseBound = true;
                    }
                    if (!overviewCampaignOpenBound) {
                        document.addEventListener("click", (event) => {
                            const trigger = event.target.closest("[data-overview-open-campaign]");
                            if (!trigger) return;
                            event.preventDefault();
                            openCampaignSheetsInPosts(trigger.dataset.overviewOpenCampaign || "all");
                        });
                        overviewCampaignOpenBound = true;
                    }

                    postsTabCards.forEach((card) => {
                        card.addEventListener("click", (event) => {
                            if (event.target.closest("[data-posts-sheet-action-toggle], [data-posts-sheet-action-menu]")) {
                                return;
                            }
                            closePostsSheetActionMenus();
                            setActivePostsTab(card.dataset.postsTabTrigger || "");
                        });
                    });

                    document.querySelectorAll("[data-posts-sheet-action-toggle]").forEach((toggle) => {
                        toggle.addEventListener("click", (event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            const menu = toggle.parentElement?.querySelector("[data-posts-sheet-action-menu]");
                            if (!menu) return;
                            const shouldOpen = menu.classList.contains("hidden");
                            closePostsSheetActionMenus(shouldOpen ? menu : null);
                        });
                    });

                    document.querySelectorAll("[data-posts-sheet-action='open-detail']").forEach((button) => {
                        button.addEventListener("click", (event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            closePostsSheetActionMenus();
                            setActivePostsTab(button.dataset.postsSheetTarget || "");
                        });
                    });

                    document.querySelectorAll("[data-posts-sheet-action='edit-metadata']").forEach((button) => {
                        button.addEventListener("click", (event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            closePostsSheetActionMenus();
                            
                            const modal = document.getElementById("edit-metadata-modal");
                            if (!modal) return;
                            
                            modal.querySelector("[data-edit-meta-id]").value = button.dataset.postsSheetId || "";
                            modal.querySelector("[data-edit-meta-orig-name]").value = button.dataset.postsSheetName || "";
                            modal.querySelector("[data-edit-meta-name]").value = button.dataset.postsSheetName || "";
                            modal.querySelector("[data-edit-meta-brand]").value = button.dataset.postsSheetBrand || "";
                            modal.querySelector("[data-edit-meta-campaign]").value = button.dataset.postsSheetCampaign || "";
                            modal.querySelector("[data-edit-meta-industry]").value = button.dataset.postsSheetIndustry || "";
                            
                            modal.classList.remove("hidden");
                            modal.classList.add("flex");
                        });
                    });

                    document.querySelectorAll("[data-posts-sheet-action-menu]").forEach((menu) => {
                        menu.addEventListener("click", (event) => {
                            event.stopPropagation();
                        });
                    });

                    if (postsBackButton) {
                        postsBackButton.addEventListener("click", () => {
                            closePostsSheetActionMenus();
                            setActivePostsTab("");
                        });
                    }

                    postsMasterCampaignChips.forEach((chip) => {
                        chip.addEventListener("click", () => {
                            closePostsSheetActionMenus();
                            setPostsMasterCampaignFilter(chip.dataset.masterCampaign || "all");
                        });
                    });

                    if (postsMasterSearchField) {
                        postsMasterSearchField.addEventListener("input", () => {
                            closePostsSheetActionMenus();
                            applyPostsMasterFilters();
                        });
                    }

                    postsTabPanels.forEach((panel) => {
                        const searchField = panel.querySelector(".posts-search-field");
                        const rerunButton = panel.querySelector(".posts-rerun-btn");
                        const chips = Array.from(panel.querySelectorAll(".posts-chip"));
                        const selectAll = panel.querySelector("[data-select-all-posts]");
                        const rowChecks = Array.from(panel.querySelectorAll("[data-post-select]"));

                        chips.forEach((chip) => {
                            chip.addEventListener("click", () => {
                                panel.dataset.postsPlatform = chip.dataset.platform || "all";
                                chips.forEach((item) => item.classList.toggle("is-active", item === chip));
                                applyPostFilters(panel);
                            });
                        });

                        if (searchField) {
                            searchField.addEventListener("input", () => applyPostFilters(panel));
                        }

                        if (rerunButton) {
                            rerunButton.addEventListener("click", async () => {
                                const targets = collectScheduleTargetsFromPanel(panel);
                                rerunButton.disabled = true;
                                await rerunSelectedPosts(targets, panel);
                                rerunButton.disabled = false;
                            });
                        }

                        if (selectAll) {
                            selectAll.addEventListener("change", () => {
                                getVisibleRowChecks(panel).forEach((checkbox) => {
                                    checkbox.checked = selectAll.checked;
                                });
                                syncPostsSelectionState();
                            });
                        }

                        rowChecks.forEach((checkbox) => {
                            checkbox.addEventListener("change", () => {
                                syncPostsSelectionState();
                            });
                        });
                    });

                    if (postsTabCards.length) {
                        const initialPostsTab = postsTabCards.find((card) => card.classList.contains("is-active"))?.dataset.postsTabTrigger || "";
                        setActivePostsTab(initialPostsTab);
                    } else {
                        if (postsVisibleCount) postsVisibleCount.textContent = "0 bài";
                        if (postsActiveTabLabel) postsActiveTabLabel.textContent = "Chưa chọn";
                    }
                    applyPostsMasterFilters();
                    syncPostsSelectionState();
                };

                const replacePostsPanelHtml = (postsHtml) => {
                    console.log("[DASH] Updating Posts panel...");
                    if (typeof postsHtml !== "string" || !postsHtml.trim()) {
                        console.warn("[DASH] Invalid Posts HTML received.");
                        return;
                    }
                    const currentPostsSection = document.getElementById("bai-dang");
                    if (!currentPostsSection) {
                        console.error("[DASH] #bai-dang section not found in DOM.");
                        return;
                    }
                    const template = document.createElement("template");
                    template.innerHTML = postsHtml.trim();
                    const nextPostsSection = template.content.firstElementChild;
                    if (!nextPostsSection) return;
                    
                    currentPostsSection.innerHTML = nextPostsSection.innerHTML;
                    console.log("[DASH] Posts panel updated. Initializing events...");
                    syncPostsDomRefs();
                    initializePostsPanel();
                };

                const replaceOverviewPanelHtml = (overviewHtml) => {
                    console.log("[DASH] Updating Overview panel...");
                    if (typeof overviewHtml !== "string" || !overviewHtml.trim()) {
                        console.warn("[DASH] Invalid Overview HTML received.");
                        return;
                    }
                    const currentOverviewSection = document.getElementById("tong-quan");
                    if (!currentOverviewSection) {
                        console.error("[DASH] #tong-quan section not found in DOM.");
                        return;
                    }
                    const template = document.createElement("template");
                    template.innerHTML = overviewHtml.trim();
                    const nextOverviewSection = template.content.firstElementChild;
                    if (!nextOverviewSection) return;
                    
                    // Replace INNER content only if it starts with the shell
                    currentOverviewSection.innerHTML = nextOverviewSection.innerHTML;
                    console.log("[DASH] Overview panel updated. Initializing charts...");
                    initializeOverviewCharts();
                };

                const replaceCampaignPanelHtml = (campaignHtml) => {
                    if (typeof campaignHtml !== "string" || !campaignHtml.trim()) return;
                    const currentCampaignSection = document.getElementById("chien-dich");
                    if (!currentCampaignSection) return;
                    const template = document.createElement("template");
                    template.innerHTML = campaignHtml.trim();
                    const nextCampaignSection = template.content.firstElementChild;
                    if (!nextCampaignSection) return;
                    currentCampaignSection.innerHTML = nextCampaignSection.innerHTML;
                    syncPostsDomRefs();
                };

                const setPostsRerunFeedback = (message = "", level = "info", panel = null) => {
                    const normalized = ["success", "warning", "error", "info"].includes(level) ? level : "info";
                    const targetPanel = panel || getActivePostsPanel();
                    if (!targetPanel) return;
                    const el = targetPanel.querySelector("[data-posts-rerun-feedback]");
                    if (!el) return;
                    if (el._hideTimer) {
                        clearTimeout(el._hideTimer);
                        el._hideTimer = null;
                    }
                    if (!message) {
                        el.textContent = "";
                        el.className = "posts-mini-campaign-feedback hidden";
                        return;
                    }
                    el.textContent = message;
                    el.className = `posts-mini-campaign-feedback is-${normalized}`;
                    const autoHideDelay = normalized === "error" ? 7000 : 4000;
                    el._hideTimer = setTimeout(() => {
                        el.textContent = "";
                        el.className = "posts-mini-campaign-feedback hidden";
                        el._hideTimer = null;
                    }, autoHideDelay);
                };

                document.addEventListener("submit", async (event) => {
                    const createCampaignForm = event.target.closest("[data-create-campaign-form]");
                    if (createCampaignForm) {
                        event.preventDefault();
                        const submitButton = createCampaignForm.querySelector('button[type="submit"]');
                        if (submitButton) {
                            submitButton.disabled = true;
                        }
                        try {
                            const payload = Object.fromEntries(new FormData(createCampaignForm).entries());
                            const campaignLabel = String(payload.campaign_label || "").trim();
                            const response = await fetch("/create-campaign", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                                body: JSON.stringify(payload),
                            });
                            const data = await response.json();
                            applyStatusState(data);
                            if (typeof data.posts_html === "string") {
                                replacePostsPanelHtml(data.posts_html);
                            }
                            if (typeof data.campaign_html === "string") {
                                replaceCampaignPanelHtml(data.campaign_html);
                            }
                            showNotice(
                                data.message || (data.ok ? `Đã tạo chiến dịch: ${campaignLabel}` : "Không tạo được chiến dịch."),
                                data.level || (data.ok ? "success" : "error")
                            );
                        } catch (_) {
                            showNotice("Không tạo được chiến dịch. Vui lòng thử lại.", "error");
                        } finally {
                            if (submitButton) {
                                submitButton.disabled = false;
                            }
                        }
                        return;
                    }
                    const campaignForm = event.target.closest("[data-campaign-form]");
                    if (!campaignForm) return;
                    event.preventDefault();
                    const submitButton = campaignForm.querySelector('button[type="submit"]');
                    if (submitButton) {
                        submitButton.disabled = true;
                    }
                    try {
                        const payload = Object.fromEntries(new FormData(campaignForm).entries());
                        const response = await fetch("/set-sheet-campaign", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
                            body: JSON.stringify(payload),
                        });
                        const data = await response.json();
                        applyStatusState(data);
                        if (typeof data.overview_html === "string") {
                            replaceOverviewPanelHtml(data.overview_html);
                        }
                        if (typeof data.posts_html === "string") {
                            replacePostsPanelHtml(data.posts_html);
                        }
                        if (typeof data.campaign_html === "string") {
                            replaceCampaignPanelHtml(data.campaign_html);
                        }
                        showNotice(
                            data.message || (data.ok ? "Đã lưu chiến dịch cho sheet." : "Không lưu được chiến dịch."),
                            data.level || (data.ok ? "success" : "error")
                        );
                    } catch (_) {
                        showNotice("Không lưu được chiến dịch. Vui lòng thử lại.", "error");
                    } finally {
                        if (submitButton) {
                            submitButton.disabled = false;
                        }
                    }
                });

                const getPanelPath = (sectionId) => sectionId === "tong-quan" ? "/" : `/${sectionId}`;
                const getPanelIdFromPath = (pathname) => {
                    const cleaned = String(pathname || "/").replace(/^\/+|\/+$/g, "");
                    if (!cleaned) {
                        return "tong-quan";
                    }
                    if (cleaned === "chien-dich" || cleaned === "nhan-vien") {
                        return "cai-dat";
                    }
                    return cleaned;
                };

                const setActivePanel = (sectionId, options = {}) => {
                    const updateHistory = options.updateHistory !== false;
                    const historyMode = options.historyMode || "replace";
                    const availableIds = dashboardSections.map((section) => section.dataset.dashboardSection);
                    const targetId = availableIds.includes(sectionId) ? sectionId : "tong-quan";

                    sidebarLinks.forEach((link) => {
                        link.classList.toggle("is-active", link.dataset.navLink === targetId);
                    });
                    dashboardSections.forEach((section) => {
                        section.classList.toggle("is-active", section.dataset.dashboardSection === targetId);
                    });

                    if (updateHistory) {
                        const targetPath = getPanelPath(targetId);
                        if ((window.location.pathname || "/") !== targetPath) {
                            const historyFn = historyMode === "push" ? history.pushState.bind(history) : history.replaceState.bind(history);
                            historyFn(null, "", targetPath);
                        }
                    }
                };

                sidebarLinks.forEach((link) => {
                    link.addEventListener("click", (event) => {
                        event.preventDefault();
                        setActivePanel(link.dataset.navLink || "tong-quan", { historyMode: "push" });
                    });
                });

                window.addEventListener("popstate", () => {
                    setActivePanel(getPanelIdFromPath(window.location.pathname), { updateHistory: false });
                });

                const loadAsyncDashboardData = async () => {
                    console.log("[DASH] Starting background population...");
                    const panels = [
                        { id: "overview", url: "/api/dashboard/overview", replacer: replaceOverviewPanelHtml },
                        { id: "posts", url: "/api/dashboard/posts", replacer: replacePostsPanelHtml },
                        { id: "config", url: "/api/dashboard/config", replacer: (html) => {
                            const el = document.getElementById("cau-hinh");
                            if (el) el.innerHTML = html;
                        } },
                        { id: "schedule", url: "/api/dashboard/schedule", replacer: (html) => {
                            const el = document.getElementById("lich-tu-dong");
                            if (el) el.innerHTML = html;
                        } }
                    ];

                    panels.forEach((panel, panelIndex) => {
                        let attempts = 0;
                        const fetchData = async () => {
                            try {
                                console.log(`[DASH] Fetching ${panel.id} (attempt ${attempts + 1})...`);
                                const res = await fetch(panel.url, { headers: { "X-Requested-With": "fetch" } });
                                if (!res.ok) throw new Error(`API status ${res.status}`);
                                const data = await res.json();
                                
                                if (data.status === "processing") {
                                    attempts++;
                                    if (attempts < 45) {
                                        const retryDelay = panel.id === "config" ? 300 : (panel.id === "overview" ? 450 : 650);
                                        console.log(`[DASH] ${panel.id} is processing, retrying in ${retryDelay}ms...`);
                                        setTimeout(fetchData, retryDelay);
                                    } else {
                                        console.warn(`[DASH] ${panel.id} timed out after 45 attempts.`);
                                    }
                                    return;
                                }

                                if (data.ok && data.html) {
                                    console.log(`[DASH] ${panel.id} ready. Updating UI...`);
                                    panel.replacer(data.html);
                                }
                            } catch (e) {
                                console.error(`[DASH] ${panel.id} load error:`, e);
                            }
                        };
                        const startDelay = panelIndex === 0 ? 0 : Math.min(720, panelIndex * 160);
                        setTimeout(fetchData, startDelay);
                    });
                };

                // 1. Start data loading immediately
                loadAsyncDashboardData();

                // 2. Initialize UI components with protection
                try {
                    initializeOverviewCharts();
                } catch (e) {
                    console.warn("[DASH] initializeOverviewCharts failed on skeleton:", e);
                }

                try {
                    initializePostsPanel();
                } catch (e) {
                    console.warn("[DASH] initializePostsPanel failed on skeleton:", e);
                }

                try {
                    setActivePanel(initialDashboardSection || getPanelIdFromPath(window.location.pathname), { updateHistory: false });
                } catch (e) {
                    console.error("[DASH] setActivePanel failed:", e);
                }

                // 3. Start polling
                refreshDashboard();
                setInterval(refreshDashboard, 4000);
            });
        
