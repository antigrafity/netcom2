#!/bin/bash
echo "Copying generated assets to the workspace..."

# Master files from current session
BRAIN_PATH="/Users/macbook/.gemini/antigravity-ide/brain/9b65992d-e0ee-46b2-b587-ae3aa7996f58"

# Copy original generated images (Unique products)
cp "$BRAIN_PATH/brahma_dashboard_1787724884482.jpg" "assets/brahma.jpg"
cp "$BRAIN_PATH/gpd_map_1787724900182.jpg" "assets/gpd.jpg"
cp "$BRAIN_PATH/aipd_portal_1787724918745.jpg" "assets/aipd.jpg"
cp "$BRAIN_PATH/team_collaborating_1787724934829.jpg" "assets/team.jpg"
cp "$BRAIN_PATH/system_maintenance_1787724952002.jpg" "assets/maintenance.jpg"
cp "$BRAIN_PATH/emb_tactical_1787726307470.jpg" "assets/emb.jpg"
cp "$BRAIN_PATH/fdm_aviation_1787726324926.jpg" "assets/fdm.jpg"
cp "$BRAIN_PATH/dots_tracking_1787726342651.jpg" "assets/dots.jpg"
cp "$BRAIN_PATH/hawkeye_profiling_1787734789361.jpg" "assets/hawkeye.jpg"
cp "$BRAIN_PATH/grouping_record_1787734807341.jpg" "assets/grouping.jpg"
cp "$BRAIN_PATH/smc_collector_1787734823376.jpg" "assets/smc.jpg"
cp "$BRAIN_PATH/sma_analytics_1787734840456.jpg" "assets/sma.jpg"
cp "$BRAIN_PATH/aism_intelligence_1787734873194.jpg" "assets/aism.jpg"
cp "$BRAIN_PATH/cma_automation_1787734997099.jpg" "assets/cma.jpg"
cp "$BRAIN_PATH/mbd_malware_1787735044064.jpg" "assets/mbd.jpg"
cp "$BRAIN_PATH/osd_platform_1787735257345.jpg" "assets/osd.jpg"

# Create PNG copies of all JPGs for backward compatibility/fallbacks
for file in assets/*.jpg; do
  cp "$file" "${file%.jpg}.png"
done

echo "Assets copied and mapped successfully!"
